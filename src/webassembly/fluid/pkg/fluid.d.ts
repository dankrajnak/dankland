/* tslint:disable */
/* eslint-disable */
/**
 */
export function greet(): void;
/**
 */
export function start(): void;
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
  static new(
    particle_count: number,
    width: number,
    height: number
  ): FluidSimulation;
  /**
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
  /**
   * @returns {number}
   */
  old_x(): number;
  /**
   * @returns {number}
   */
  old_y(): number;
  /**
   * @returns {number}
   */
  vx(): number;
  /**
   * @returns {number}
   */
  vy(): number;
}
