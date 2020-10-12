import * as wasm from './fluid_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
*/
export function init() {
    wasm.init();
}

/**
*/
export class FluidSimulation {

    static __wrap(ptr) {
        const obj = Object.create(FluidSimulation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_fluidsimulation_free(ptr);
    }
    /**
    * @param {number} particle_count
    * @param {number} width
    * @param {number} height
    * @returns {FluidSimulation}
    */
    static new(particle_count, width, height) {
        var ret = wasm.fluidsimulation_new(particle_count, width, height);
        return FluidSimulation.__wrap(ret);
    }
    /**
    * @param {number} scroll
    * @param {number} mouse_x
    * @param {number} mouse_y
    * @param {number} dt
    */
    simulate(scroll, mouse_x, mouse_y, dt) {
        wasm.fluidsimulation_simulate(this.ptr, scroll, mouse_x, mouse_y, dt);
    }
    /**
    * @returns {number}
    */
    x() {
        var ret = wasm.fluidsimulation_x(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    y() {
        var ret = wasm.fluidsimulation_y(this.ptr);
        return ret;
    }
}

export const __wbg_alert_193beaed88f01901 = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

