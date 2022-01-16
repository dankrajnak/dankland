extern crate fluid;

#[cfg(test)]
mod tests {
  use super::*;
  use fluid::spatial_hash_map::SpatialHashMap;

  #[test]
  fn can_construct() {
    let _: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
  }

  #[test]
  fn add_one_item_and_query() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(0.0, 0.0, 1);

    assert_eq!(hash_map.query(0.0, 0.0, None), vec![1]);
  }

  #[test]
  fn add_two_items_and_query() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(0.0, 0.0, 1);
    hash_map.add(0.0, 0.0, 1);

    assert_eq!(hash_map.query(0.0, 0.0, None), vec![1, 1]);
  }

  #[test]
  fn add_one_item_and_query_with_radius() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(0.0, 0.0, 1);

    assert_eq!(hash_map.query(1.0, 0.0, Some(1.0)), vec![1]);
  }

  #[test]
  fn add_one_item_and_query_with_radius_out_of_range() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(0.0, 0.0, 1);

    assert_eq!(hash_map.query(3.0, 0.0, Some(1.0)), vec![]);
  }

  #[test]
  fn add_two_item_and_query_with_radius() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(0.0, 0.0, 1);
    hash_map.add(0.0, 1.0, 1);

    assert_eq!(hash_map.query(0.0, 0.0, Some(1.0)), vec![1, 1]);
  }

  #[test]
  fn add_four_item_and_query_with_radius_big_cell_size() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10, 10, 5);
    hash_map.add(2.0, 0.0, 1);
    hash_map.add(7.0, 3.0, 1);
    hash_map.add(5.0, 3.0, 1);
    hash_map.add(10.0, 10.0, 1);

    assert_eq!(hash_map.query(5.0, 3.0, Some(2.0)), vec![1, 1, 1]);
  }

  #[test]
  fn add_four_item_and_query_with_radius_small_cell_size() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10, 10, 2);
    hash_map.add(2.0, 0.0, 1);
    hash_map.add(7.0, 3.0, 1);
    hash_map.add(5.0, 3.0, 1);
    hash_map.add(10.0, 10.0, 2);

    assert_eq!(hash_map.query(5.0, 3.0, Some(2.0)), vec![1, 1, 1]);
  }

  #[test]
  fn add_two_item_and_query_with_radius_indivisible_cell_size() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(10, 10, 3);
    hash_map.add(0.0, 0.0, 3);
    hash_map.add(9.0, 0.0, 1);

    assert_eq!(hash_map.query(8.0, 0.0, Some(2.0)), vec![1]);
  }

  #[test]
  fn add_five_items_and_query_with_radius() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(1.0, 0.0, 1);
    hash_map.add(0.0, 1.0, 1);
    hash_map.add(1.0, 1.0, 1);
    hash_map.add(2.0, 1.0, 1);
    hash_map.add(1.0, 2.0, 1);

    assert_eq!(hash_map.query(1.0, 1.0, Some(1.0)), vec![1, 1, 1, 1, 1]);
  }

  #[test]
  fn query_with_over_sized_radius() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(1.0, 1.0, 1);

    assert_eq!(hash_map.query(1.0, 1.0, Some(30.0)), vec![1]);
  }

  #[test]
  fn clear_hash_map() {
    let mut hash_map: SpatialHashMap<usize> = SpatialHashMap::new(5, 5, 1);
    hash_map.add(1.0, 1.0, 1);
    hash_map.clear();

    assert_eq!(hash_map.query(1.0, 1.0, None), vec![]);
  }
}
