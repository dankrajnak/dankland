/// Restrict a value to be in-between a min and max value
fn clamp(val: usize, min: usize, max: usize) -> usize {
  return val.max(min).min(max);
}

/// Grouping of a dataset by location in a 2D space.
pub struct SpatialHashMap<T> {
  width: usize,
  height: usize,
  cell_size: usize,
  grid: Vec<Vec<T>>,
}

impl<T: Copy> SpatialHashMap<T> {
  /// Creates a new SpatialHashMap.
  ///
  /// Width and Height are the dimensions of the hashmap.  Cell size
  /// determines how big the "buckets" should be in the hashmap.  A smaller
  /// cell size will yield more accurate queries, but queries become more expensive.
  ///
  /// TODO: width and height really shouldn't be usize.  They should be floats
  /// there's a problem with the code now where we have to have an extra column
  /// and row of cells which end up being infintesimally small.  In other words,
  /// if this is 1-dimensinal and of length 10 and you decide to set sell size to 5,
  /// you'll have three cells.  The first cell is from 0 - 4.999..., the second is from
  /// 5 to 9.999999 and the last cell is only for points that are exactly 10.  
  /// We need to specifically handle these edge cases and consider points that are
  /// exactly at the edge inside the closest box.
  ///
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let _hash_map: SpatialHashMap<usize> = SpatialHashMap::new(2,2, 1);
  /// ```
  pub fn new(width: usize, height: usize, cell_size: usize) -> SpatialHashMap<T> {
    let mut grid = Vec::new();
    for _ in 0..((width / cell_size + 1) * (height / cell_size + 1)) {
      grid.push(Vec::new())
    }
    SpatialHashMap {
      width,
      height,
      grid,
      cell_size,
    }
  }
  /// Clear the hashmap, preserving its dimensions.
  ///
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(2,2,1);
  /// hash_map.add(1.0,1.0, 1);
  /// hash_map.clear();
  /// assert_eq!(hash_map.query(1.0, 1.0, None), vec![]);
  /// ```
  pub fn clear(&mut self) {
    for i in &mut self.grid {
      i.clear();
    }
  }
  /// Add an item to the spatial hashmap at a specified location.
  ///
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5,5, 1);
  /// hash_map.add(1.0, 1.0, 3);
  /// assert_eq!(hash_map.query(1.0, 1.0, None), vec![3]);
  /// ```
  ///
  ///
  /// If x and y are larger than width or height respectfully, they will be set to width-1 or height -1.
  ///
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5,5,1);
  /// hash_map.add(100.0, 100.0, 3);
  /// assert_eq!(hash_map.query(4.0, 4.0, None), vec![3]);
  /// ```
  ///
  ///
  /// Similarly, if x or y are less than 0, they will be set to 0.
  ///
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5,5,1);
  /// hash_map.add(-1.0, -1.0, 3);
  /// assert_eq!(hash_map.query(0.0, 0.0, None), vec![3]);
  /// ```
  pub fn add(&mut self, x: f32, y: f32, data: T) {
    let index = self.get_bucket_index(x, y);
    self.grid[index].push(data)
  }

  /// Find a the data around a particular space in the hashmap, optionally providing a to radius
  /// approximately within which points should be found.
  ///
  /// The radius isn't a true euclidean distance.  Instead, it's the number of squares away
  /// from the selected space.  For example, Given a radius of two, this will check all buckets
  /// below marked with an x, and the center, symbolized by 0.
  ///
  /// x x x x x
  /// x x x x x
  /// x x O x x
  /// x x x x x
  /// x x x x x
  ///
  /// as you can see below:
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10,10,1);
  /// hash_map.add(0.0, 0.0, 0); // Out of range
  /// hash_map.add(2.0, 2.0, 1); // Top left corner
  /// hash_map.add(4.0, 4.0, 1); // Center
  /// hash_map.add(6.0, 6.0, 1); // Bottom Right Corner
  /// assert_eq!(hash_map.query(4.0, 4.0, Some(2.0)), vec![1, 1, 1]);
  /// ```
  ///
  /// If a radius isn't provided, only the bucket specified is checked
  /// ```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10,10,1);
  /// hash_map.add(0.0,0.0,0); // Out of range
  /// hash_map.add(1.0, 1.0, 1);
  /// assert_eq!(hash_map.query(1.0, 1.0, None), vec![1]);
  /// ```
  pub fn query(&self, x: f32, y: f32, radius: Option<f32>) -> Vec<T> {
    return match radius {
      Some(rad) => self.query_with_radius(x, y, rad),
      None => self.query_without_radius(x, y),
    };
  }

  fn query_without_radius(&self, x: f32, y: f32) -> Vec<T> {
    return self.grid[self.get_bucket_index(x, y)].to_vec();
  }

  fn query_with_radius(&self, x: f32, y: f32, radius: f32) -> Vec<T> {
    // get radius bounds in number of cells from the left or from the bottom.
    // for example, the value of left is how many cells from the left our
    // radius starts (inclusive)
    let left = clamp((x - radius).max(0.0) as usize, 0, self.width) / self.cell_size;
    let right = clamp((x + radius).max(0.0) as usize, 0, self.width) / self.cell_size;
    let bottom = clamp((y - radius).max(0.0) as usize, 0, self.height) / self.cell_size;
    let top = clamp((y + radius).max(0.0) as usize, 0, self.height) / self.cell_size;

    let mut slices = Vec::new();
    for i in left..(right + 1) {
      for j in bottom..(top + 1) {
        slices.push(&self.grid[i + j * self.width / self.cell_size]);
      }
    }
    let mut total: usize = 0;
    for i in 0..slices.len() {
      total += slices[i].len()
    }

    let mut result: Vec<T> = Vec::with_capacity(total);

    for i in 0..slices.len() {
      result.extend_from_slice(slices[i])
    }

    return result;
  }

  ///```
  /// # use fluid::spatial_hash_map::SpatialHashMap;
  /// let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10,10,5);
  /// assert_eq!(hash_map.get_bucket_index(1.0, 1.0), 0);
  /// assert_eq!(hash_map.get_bucket_index(9.0, 1.0), 1);
  /// assert_eq!(hash_map.get_bucket_index(0.0, 6.0), 2);
  /// ```
  ///
  pub fn get_bucket_index(&self, x: f32, y: f32) -> usize {
    let clamp_x = clamp(x.max(0.0) as usize, 0, self.width - 1) / self.cell_size;
    let clamp_y = clamp(y.max(0.0) as usize, 0, self.height - 1) / self.cell_size;
    return clamp_x + clamp_y * self.width / self.cell_size;
  }
}
