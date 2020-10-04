//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use fluid::fluid::FluidSimulation;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    let mut fluid = FluidSimulation::new(1500, 1000, 1000);
    fluid.simulate(0.167);
}
