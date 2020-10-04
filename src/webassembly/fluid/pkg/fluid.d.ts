/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export function init(): void;
/**
*/
export class FluidSimulation {
  free(): void;
/**
* @param {number} particle_count 
* @param {number} width 
* @param {number} height 
* @returns {FluidSimulation} 
*/
  static new(particle_count: number, width: number, height: number): FluidSimulation;
/**
*```
* # use fluid::fluid::FluidSimulation;
* let mut fluid = FluidSimulation::new(1500, 1000, 1000);
* fluid.simulate(0.167);
*```
*
* @param {number} scroll 
* @param {number} mouse_x 
* @param {number} mouse_y 
* @param {number} dt 
*/
  simulate(scroll: number, mouse_x: number, mouse_y: number, dt: number): void;
/**
* @returns {number} 
*/
  x(): number;
/**
* @returns {number} 
*/
  y(): number;
}
