use wasm_bindgen::prelude::*;

const PARTICLE_COUNT: usize = 100;
const GRAVITY: f32 = 35.0;

#[wasm_bindgen]
pub struct FluidSimulation {
  particleCount: u32,
  x: Vec<&f32>,
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
  fn simulate(&self) -> bool {
    // Update old position
    for i in 0..PARTICLE_COUNT {
      *&self.oldX[i] = &self.x[i]
    }

    true
  }
}
