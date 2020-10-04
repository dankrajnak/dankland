import * as React from "react";
import * as THREE from "three";

import setupCopyShader from "../Services/Three/CopyShader";
import setupEffectComposer from "../Services/Three/EffectComposer";
import setupRenderPass from "../Services/Three/RenderPass";
import setupShaderPass from "../Services/Three/ShaderPass";
import CanvasDrawer from "../View/UI/CavnasDrawer/CanvasDrawer";
import { FluidSimulation } from "../webassembly/fluid/pkg/fluid";
import useFullScreen from "../View/Hooks/useFullScreen";
import BlendPointsShader from "../View/BlendPointsShader";
import gradientCircle from "../View/GradientCircle";

setupCopyShader(THREE);
setupEffectComposer(THREE);
setupRenderPass(THREE);
setupShaderPass(THREE);

const PARTICLE_COUNT = 2000;
const RENDER_PLANE = true;

const Fluid = () => {
  const [simulator, setSimulator] = React.useState<FluidSimulation | null>(
    null
  );
  const [width, height] = useFullScreen();
  console.log(width, height);
  const [memory, setMemory] = React.useState<WebAssembly.Memory | null>(null);
  React.useEffect(() => {
    if (width && height) {
      import(`../webassembly/fluid/pkg`)
        .then((module) => {
          import("../webassembly/fluid/pkg/fluid_bg").then(({ memory }) => {
            const simul = module.FluidSimulation.new(PARTICLE_COUNT, 700, 700);
            setSimulator(simul);
            setMemory(memory);
          });
        })
        .catch(console.error);
    }
  }, [height, width]);

  // const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  const mousePosition = React.useRef([0, 0]);

  const artist = React.useCallback(
    (ctx, dt) => {
      if (simulator && memory) {
        const xPtr = simulator.x();
        const xPos = new Float32Array(memory.buffer, xPtr, PARTICLE_COUNT);
        const yPtr = simulator.y();
        const yPos = new Float32Array(memory.buffer, yPtr, PARTICLE_COUNT);
        simulator.simulate(
          window.scrollY,
          mousePosition.current[0],
          mousePosition.current[1],
          Math.min(dt / 500, 1 / 35)
        );
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        if (xPos.length !== 0 && yPos.length !== 0) {
          ctx.clearRect(0, 0, width, height);
        }
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          ctx.beginPath();
          ctx.ellipse(xPos[i], yPos[i], 2, 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
        }
      }
    },
    [height, memory, simulator, width]
  );

  return (
    width &&
    height &&
    simulator &&
    memory && (
      <CanvasDrawer
        width={width}
        height={height}
        fps={30}
        artist={artist}
        onMouseOut={() => {
          console.log("blur");
          mousePosition.current = [0, 0];
        }}
        onMouseMove={(event: React.MouseEvent) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          mousePosition.current = [
            event.clientX - bounds.left,
            event.clientY - bounds.top,
          ];
        }}
      />
    )
  );
};

export default Fluid;

const start = (width: number, height: number) => (container) => {
  // SETUP
  const canvas = container.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.style.borderRadius = "50%";

  const GRID_CELLS = 54;
  const RENDER_PLANE = true;

  const INTERACTION_RADIUS =
    ((height / GRID_CELLS) * 2.5 * 38) / Math.sqrt(PARTICLE_COUNT);
  const REST_DENSITY = 50;

  const particleMeshes = [
    gradientCircle(INTERACTION_RADIUS, REST_DENSITY, new THREE.Color(1, 0, 0)),
    gradientCircle(INTERACTION_RADIUS, REST_DENSITY, new THREE.Color(0, 1, 0)),
    gradientCircle(INTERACTION_RADIUS, REST_DENSITY, new THREE.Color(0, 0, 1)),
  ];

  const dpr = window.devicePixelRatio;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 30;

  const composer = new THREE.EffectComposer(renderer);
  const renderPass = new THREE.RenderPass(scene, camera);
  renderPass.renderToScreen = !RENDER_PLANE;
  composer.addPass(renderPass);

  const blendPointsPass = new THREE.ShaderPass(BlendPointsShader);
  if (RENDER_PLANE) {
    blendPointsPass.renderToScreen = true;
    blendPointsPass.uniforms.horizontalCells.value = GRID_CELLS;
    blendPointsPass.uniforms.verticalCells.value = GRID_CELLS;
    composer.addPass(blendPointsPass);
  }

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(20, 10, 30);
  scene.add(light);

  const data = new Uint8Array(4 * GRID_CELLS * GRID_CELLS);

  blendPointsPass.uniforms.resolution.value.set(width * dpr, height * dpr);

  const dataTexture = new THREE.DataTexture(
    data,
    GRID_CELLS,
    GRID_CELLS,
    THREE.RGBAFormat,
    THREE.UnsignedByteType
  );

  dataTexture.magFilter = THREE.LinearFilter;
  blendPointsPass.uniforms.grid.value = dataTexture;
  const lastTime = performance.now();
  const loop = (time: number) => {
    requestAnimationFrame(loop);
    composer.render();
    simulator.simulate(
      window.scrollY,
      mousePosition.current[0],
      mousePosition.current[1],
      Math.min(dt / 500, 1 / 35)
    );
    const xPtr = simulator.x();
    const xPos = new Float32Array(memory.buffer, xPtr, PARTICLE_COUNT);
    const yPtr = simulator.y();
    const yPos = new Float32Array(memory.buffer, yPtr, PARTICLE_COUNT);
  };
};
