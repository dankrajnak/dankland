use wasm_bindgen::prelude::*;

const PARTICLE_COUNT: usize = 100;
const GRAVITY: f32 = 35.0;

#[wasm_bindgen]
pub struct FluidSimulation {
  particle_count: u32,
  x: Vec<f32>,
  y: Vec<f32>,
  oldX: Vec<f32>,  // previous x location
  oldY: Vec<f32>,  // previous y location
  vx: Vec<f32>,    // horizontal velocity
  vy: Vec<f32>,    // vertical velocity
  p: Vec<f32>,     // pressure
  pNear: Vec<f32>, // pressure near
  g: Vec<f32>,
}

#[wasm_bindgen]
impl FluidSimulation {
  pub fn new(particle_count: u32) -> FluidSimulation {
    FluidSimulation {
      particle_count,
      x: Vec::new(),
      y: Vec::new(),
      oldX: Vec::new(),  // previous x location
      oldY: Vec::new(),  // previous y location
      vx: Vec::new(),    // horizontal velocity
      vy: Vec::new(),    // vertical velocity
      p: Vec::new(),     // pressure
      pNear: Vec::new(), // pressure near
      g: Vec::new(),
    }
  }

  fn simulate(&mut self) -> bool {
    // Update old position
    for i in 0..PARTICLE_COUNT {
      self.oldX[i] = self.x[i]
    }

    true
  }
}

fn main() {
  let mut thing = FluidSimulation::new(32);
  thing.simulate();
}
