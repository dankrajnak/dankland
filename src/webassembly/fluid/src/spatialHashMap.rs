use std::cmp;
use std::convert::TryInto;

fn clamp(val: isize, min: isize, max: isize) -> isize {
  return cmp::min(cmp::max(val, min), max);
}

pub struct SpatialHashMap<T> {
  width: isize,
  height: isize,
  grid: Vec<Vec<T>>,
}

impl<T> SpatialHashMap<T> {
  pub fn new(width: isize, height: isize) -> SpatialHashMap<T> {
    SpatialHashMap {
      width,
      height,
      grid: Vec::new([..(width * height)].iter().map(|x| ()=> Vec::new())),
    }
  }

  pub fn clear(&mut self) {
    self.grid.clear();
  }

  pub fn add(&mut self, x: isize, y: isize, data: T) {
    let clampX = clamp(x, 0, self.width - 1);
    let clampY = clamp(y, 0, self.height - 1);

    let index: usize = (clampX + clampY * self.width).try_into().unwrap();
    match self.grid.get(index) {
      Some(arr) => arr.push(data),
      None => (),
    }
  }
}
