import * as React from "react";
import CanvasDrawer from "../View/UI/CavnasDrawer/CanvasDrawer";
import FluidService from "../Services/Fluid/Fluid.service";

const WIDTH = 600;
const HEIGHT = 600;
const NUM_PARTICLES = 1000;
const FPS = 60;
const fluidService = new FluidService(
  NUM_PARTICLES,
  WIDTH,
  HEIGHT,
  1000 / FPS / 500
);

const FluidExperiment = () => {
  const artist = React.useMemo(
    () => (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "black";
      // Get next state.
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const point = fluidService.state.getPoint(i);
        ctx.beginPath();
        ctx.ellipse(
          point.x + WIDTH / 2,
          point.y + HEIGHT / 2,
          2,
          2,
          0,
          0,
          Math.PI * 2
        );
        ctx.closePath();
        ctx.fill();
      }
      fluidService.next();
    },
    []
  );

  return (
    <>
      <div className="center-screen">
        <CanvasDrawer width={WIDTH} height={HEIGHT} artist={artist} fps={FPS} />
      </div>
      <style jsx>
        {`
          .center-screen {
            display: flex;
            width: 100%;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default FluidExperiment;
