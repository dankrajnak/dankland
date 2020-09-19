#![allow(dead_code)]

use crate::spatial_hash_map::SpatialHashMap;
use wasm_bindgen::prelude::*;

const GRAVITY: (f32, f32) = (0.0, 35.0);

fn add_vector<T: std::ops::Add>(a: (T, T), b: (T, T)) -> (T::Output, T::Output) {
  return (a.0 + b.0, a.1 + b.1);
}

#[wasm_bindgen]
pub struct FluidSimulation {
  particle_count: usize,
  x: Vec<f32>,
  y: Vec<f32>,
  old_x: Vec<f32>,  // previous x location
  old_y: Vec<f32>,  // previous y location
  vx: Vec<f32>,     // horizontal velocity
  vy: Vec<f32>,     // vertical velocity
  p: Vec<f32>,      // pressure
  p_near: Vec<f32>, // pressure near
  g: Vec<f32>,
  hash_map: SpatialHashMap<usize>,
  // Configuration
  dt: f32,
  width: f32,
  height: f32,
  x_grid_cells: f32,
  y_grid_cells: f32,
}

#[wasm_bindgen]
impl FluidSimulation {
  pub fn new(particle_count: usize, width: usize, height: usize, dt: f32) -> FluidSimulation {
    FluidSimulation {
      particle_count,
      x: Vec::new(),
      y: Vec::new(),
      old_x: Vec::new(),  // previous x location
      old_y: Vec::new(),  // previous y location
      vx: Vec::new(),     // horizontal velocity
      vy: Vec::new(),     // vertical velocity
      p: Vec::new(),      // pressure
      p_near: Vec::new(), // pressure near
      g: Vec::new(),
      width: width as f32,
      height: height as f32,
      dt,
      hash_map: SpatialHashMap::new(width, height, 5),
      x_grid_cells: 54.0,
      y_grid_cells: 54.0,
    }
  }

  fn apply_global_forces(&mut self, index: usize, dt: f32) {
    // Calculate force
    let mut force: (f32, f32) = (0.0, 0.0);
    force = add_vector(force, GRAVITY);
    // force = add_vector(force, SCROLL_FORCE);
    // force = add_vector(force, ACCELERATION_FORCE);
    // force = add(force, [0, -0.25 * state.color[i]]);

    // f = m * a --> a = f / m
    // v += a * dt --> v += f * dt / m
    let m = 1.0;
    self.vx[index] += (force.0 * dt) / m;
    self.vy[index] += (force.1 * dt) / m;
  }

  fn pass_one(&mut self, dt: f32) {
    // Update old position
    for i in 0..self.particle_count {
      self.old_x[i] = self.x[i];

      self.apply_global_forces(i, dt);

      // Update positions
      self.x[i] += self.vx[i] * dt;
      self.y[i] += self.vy[i] * dt;

      // Update hashmap
      let grid_x = (self.x[i] / self.width + 0.5) * self.x_grid_cells;
      let grid_y = (self.y[i] / self.height + 0.5) * self.y_grid_cells;
      self.hash_map.add(grid_x, grid_y, i);
    }
  }

  pub fn simulate(&mut self) -> bool {
    true
  }
}
