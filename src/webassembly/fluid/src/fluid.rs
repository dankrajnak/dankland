#![allow(dead_code)]

use crate::spatial_hash_map::SpatialHashMap;
use wasm_bindgen::prelude::*;
extern crate web_sys;

const GRAVITY: (f32, f32) = (0.0, -7.0);
const STIFFNESS: f32 = 35.0;
const STIFFNESS_NEAR: f32 = 100.0;
const REST_DENSITY: f32 = 5.0;

fn add_vector<T: std::ops::Add>(a: (T, T), b: (T, T)) -> (T::Output, T::Output) {
  return (a.0 + b.0, a.1 + b.1);
}

fn sub_vector<T: std::ops::Sub>(a: (T, T), b: (T, T)) -> (T::Output, T::Output) {
  return (a.0 - b.0, a.1 - b.1);
}

fn length_squared_vector(a: (f32, f32)) -> f32 {
  return a.0.powi(2) + a.1.powi(2);
}

fn mult_scalar_vector(a: (f32, f32), scalar: f32) -> (f32, f32) {
  return (a.0 * scalar, a.1 * scalar);
}

fn unit_approx_vector(vec: (f32, f32)) -> (f32, f32) {
  if vec.0 == 0.0 && vec.1 == 0.0 {
    return (0.0, 0.0);
  }
  let ax = vec.0.abs();
  let ay = vec.1.abs();
  let mut ratio = 1.0 / ax.max(ay);
  ratio *= 1.29289 - (ax + ay) * ratio * 0.29289;
  return mult_scalar_vector(vec, ratio);
}

fn mass(id: usize) -> f32 {
  return 0.525 + ((id % 5) as f32) * 0.3;
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
  last_scroll: f32,
  scroll_force: (f32, f32),
  // Configuration
  width: f32,
  height: f32,
  interaction_radius: f32,
}
///
/// ```
/// use fluid::fluid::FluidSimulation;
/// let mut simulation = FluidSimulation::new(1000, 46, 46);
///  println!("{}", simulation.first_x());
/// simulation.simulate(0.0, 10000.0, 0.0, 0.02857142857142857);
///  println!("{}",  simulation.first_x());
/// simulation.simulate(0.0, 10000.0, 0.0, 0.02857142857142857);
/// println!("{}",  simulation.first_x());
///
/// ```
#[wasm_bindgen]
impl FluidSimulation {
  pub fn new(particle_count: usize, width: usize, height: usize) -> FluidSimulation {
    crate::utils::set_panic_hook();
    let mut x: Vec<f32> = Vec::with_capacity(particle_count);
    let mut y: Vec<f32> = Vec::with_capacity(particle_count);

    let spacing = width as f32 * height as f32 / particle_count as f32;

    for i in 0..particle_count {
      x.push(((i as f32 * spacing) as usize % width) as f32);
      y.push(((i as f32 * spacing) as usize / width) as f32);
    }

    FluidSimulation {
      particle_count,
      x,
      y,
      old_x: vec![0.0; particle_count],  // previous x location
      old_y: vec![0.0; particle_count],  // previous y location
      vx: vec![0.0; particle_count],     // horizontal velocity
      vy: vec![0.0; particle_count],     // vertical velocity
      p: vec![0.0; particle_count],      // pressure
      p_near: vec![0.0; particle_count], // pressure near
      g: vec![0.0; particle_count],
      width: width as f32,
      height: height as f32,
      hash_map: SpatialHashMap::new(width, height, if width > 50 { width / 50 } else { 1 }),
      interaction_radius: (height as f32 / 50.0) * 2.5 * 38.0 / (particle_count as f32).sqrt(),
      scroll_force: (0.0, 0.0),
      last_scroll: 0.0,
    }
  }

  pub fn simulate(&mut self, scroll: f32, mouse_x: f32, mouse_y: f32, dt: f32) {
    self.hash_map.clear();
    // Calc global forces
    self.scroll_force.1 = -((scroll - self.last_scroll) / dt / 5.0)
      .max(-140.0)
      .min(140.0);
    self.last_scroll = scroll;
    let mouse = (mouse_x, mouse_y);
    self.pass_one(mouse, dt);
    self.pass_two(dt);
    self.pass_three(dt);
  }

  pub fn x(&self) -> *const f32 {
    self.x.as_ptr()
  }

  pub fn y(&self) -> *const f32 {
    self.y.as_ptr()
  }

  fn pass_one(&mut self, mouse: (f32, f32), dt: f32) {
    // let _timer = Timer::new("pass_one");

    // Update old position
    for i in 0..self.particle_count {
      self.old_x[i] = self.x[i];
      self.old_y[i] = self.y[i];

      self.apply_global_forces(i, mouse, dt);

      // Update positions
      self.x[i] += self.vx[i] * dt;
      self.y[i] += self.vy[i] * dt;

      // Update hashmap
      self.hash_map.add(self.x[i], self.y[i], i);
    }
  }

  fn apply_global_forces(&mut self, index: usize, mouse: (f32, f32), dt: f32) {
    // Calculate force
    let mut force: (f32, f32) = (0.0, 0.0);
    let center_force = sub_vector(
      (self.width / 2.0, self.height / 2.0),
      (self.x[index], self.y[index]),
    );
    force = add_vector(force, center_force);
    // force = add_vector(force, self.scroll_force);

    let from_mouse = sub_vector((self.x[index], self.y[index]), mouse);
    let scalar = (2700.0 / length_squared_vector(from_mouse)).min(100.0);
    let mouse_force = mult_scalar_vector(unit_approx_vector(from_mouse), scalar);

    force = add_vector(force, mouse_force);

    // f = m * a --> a = f / m
    // v += a * dt --> v += f * dt / m
    let m = mass(index);
    self.vx[index] += (force.0 * dt) / m;
    self.vy[index] += (force.1 * dt) / m;
  }

  fn pass_two(&mut self, dt: f32) {
    for id in 0..self.particle_count {
      let neighbors = self.get_neighbors_with_gradients(id);
      self.update_pressure(id, &neighbors);
      self.relax(id, &neighbors, dt);
    }
  }

  fn get_neighbors_with_gradients(&mut self, id: usize) -> Vec<usize> {
    let results = self
      .hash_map
      .query(self.x[id], self.y[id], Some(self.interaction_radius));

    let mut neighbors = Vec::new();

    for k in 0..results.len() {
      let n = results[k];
      if id == n {
        continue; // Skip itself
      }

      let g = self.get_gradient(id, n);
      if g == 0.0 {
        continue;
      }

      self.g[n] = g; // Store the gradient
      neighbors.push(n); // Push the neighbor to neighbors
    }

    return neighbors;
  }

  fn get_gradient(&self, a_id: usize, b_id: usize) -> f32 {
    let particle = (self.x[a_id], self.y[a_id]); // position of a
    let neighbor = (self.x[b_id], self.y[b_id]); // position of b
    let lsq = length_squared_vector(sub_vector(particle, neighbor));
    if lsq > self.interaction_radius.powi(2) {
      return 0.0;
    }

    return (1.0 - lsq.sqrt() / self.interaction_radius).max(0.0);
  }

  fn update_pressure(&mut self, id: usize, neighbors: &Vec<usize>) {
    let mut density = 0.0;
    let mut near_density = 0.0;
    for k in 0..neighbors.len() {
      let g = self.g[neighbors[k]];
      let m = mass(id);
      density += g * g * m;
      near_density += g * g * g * m;
    }
    let m = mass(id);
    self.p[id] = STIFFNESS * (density - REST_DENSITY) * m;
    self.p_near[id] = STIFFNESS_NEAR * near_density * m;
  }

  fn relax(&mut self, id: usize, neighbors: &Vec<usize>, dt: f32) {
    let pos = (self.x[id], self.y[id]);

    for k in 0..neighbors.len() {
      let n = neighbors[k];
      let g = self.g[n];
      let n_pos = (self.x[n], self.y[n]);
      let magnitude = self.p[id] * g + self.p_near[id] * g * g;
      let f = 1.0; //if self.color[id] == self.color[n] { 0.99 } else { 1.0 };
      let d = mult_scalar_vector(
        unit_approx_vector(sub_vector(n_pos, pos)),
        magnitude * f * dt * dt,
      );
      let mass_i = mass(id);
      let mass_j = mass(n);
      let mt = mass_i + mass_j;

      self.x[id] -= d.0 * (mass_j / mt);
      self.y[id] -= d.1 * (mass_j / mt);
      self.x[n] += d.0 * (mass_i / mt);
      self.y[n] += d.1 * (mass_i / mt);
    }
  }

  fn pass_three(&mut self, dt: f32) {
    // let _timer = Timer::new("pass_three");

    for i in 0..self.particle_count {
      // Constrain the particles to a container
      self.contain(i, dt);

      // Calculate new velocities
      self.calculate_velocity(i, dt);
    }
  }

  fn contain(&mut self, i: usize, _dt: f32) {
    let dx = self.vx[i] * 0.015;
    let dy = self.vy[i] * 0.015;
    if self.x[i] < 0.0 {
      self.x[i] = 0.0;
      self.old_x[i] = -dx;
    }
    if self.x[i] > self.width {
      self.x[i] = self.width;
      self.old_x[i] = self.width + dx;
    }
    if self.y[i] < 0.0 {
      self.y[i] = 0.0;
      self.old_y[i] = -dy;
    }
    if self.y[i] > self.height {
      self.y[i] = self.height;
      self.old_y[i] = self.height + dy;
    }
  }

  fn calculate_velocity(&mut self, i: usize, dt: f32) {
    let pos = (self.x[i], self.y[i]);
    let old = (self.old_x[i], self.old_y[i]);

    let v = mult_scalar_vector(sub_vector(pos, old), 1.0 / dt);

    self.vx[i] = v.0;
    self.vy[i] = v.1;
  }
}
