import * as React from "react";

import CanvasDrawer from "../View/UI/CavnasDrawer/CanvasDrawer";
import { FluidSimulation } from "../webassembly/fluid/pkg/fluid";
import useFullScreen from "../View/Hooks/useFullScreen";

const PARTICLE_COUNT = 2000;

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
