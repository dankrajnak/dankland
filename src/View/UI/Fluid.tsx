import { memo, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FluidSimulation } from "../../webassembly/fluid/pkg/fluid";
import { memory } from "../../webassembly/fluid/pkg/fluid_bg.wasm";

const PARTICLE_COUNT = 1000;
const PERSPECTIVE_ANGLE = 75;
const CAMERA_DISTANCE = 30;

const VIEWPORT_HEIGHT =
  Math.tan((PERSPECTIVE_ANGLE / 2 / 180) * Math.PI) * CAMERA_DISTANCE * 2;

const PARTICLE_COLORS = [
  "#4AA0C9", // blue
  "#FFA879", // orange
  "#FFE596", // yellow
  "#90CF9C", // green
  "#FF6466", // red
];

const Particle = (props: {
  index: number;
  xArray: React.MutableRefObject<Float32Array>;
  yArray: React.MutableRefObject<Float32Array>;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  useFrame(() => {
    try {
      if (ref.current) {
        ref.current.position.x =
          props.xArray.current[props.index] -
          (VIEWPORT_HEIGHT / 2) * (size.width / size.height);
        ref.current.position.y =
          props.yArray.current[props.index] - VIEWPORT_HEIGHT / 2;
        ref.current.position.z = 0;
      }
    } catch (_ignore) {
      // Sometimes the x and y arrays are reallocated and xArray and yArray
      // become invalid.  On the next render, they will be reconstructed and become
      // valid again.  So, simply ignore the error.
    }
  });
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[0.1, 8]} />
      <meshBasicMaterial
        color={PARTICLE_COLORS[props.index % PARTICLE_COLORS.length]}
      />
    </mesh>
  );
};

const Particles = ({
  simulator,
  memory,
}: {
  simulator: FluidSimulation;
  memory: WebAssembly.Memory;
}) => {
  const xPos = useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.x(), PARTICLE_COUNT)
  );
  const yPos = useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.y(), PARTICLE_COUNT)
  );

  useFrame(({ mouse, size }, dt) => {
    const mouseX = (mouse.x / 2) * VIEWPORT_HEIGHT * (size.width / size.height);
    const mouseY = (mouse.y / 2) * VIEWPORT_HEIGHT;
    simulator.simulate(
      -window.scrollY,
      mouseX + (VIEWPORT_HEIGHT / 2) * (size.width / size.height),
      mouseY + VIEWPORT_HEIGHT / 2,
      Math.min(Math.max(dt, 0.001), 1 / 35)
    );

    xPos.current = new Float32Array(
      memory.buffer,
      simulator.x(),
      PARTICLE_COUNT
    );
    yPos.current = new Float32Array(
      memory.buffer,
      simulator.y(),
      PARTICLE_COUNT
    );
  });

  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(<Particle index={i} xArray={xPos} yArray={yPos} key={i} />);
  }

  return <>{particles}</>;
};

const Fluid = ({
  width,
  height,
  onLoad,
}: {
  width: number;
  height: number;
  onLoad: () => any;
}) => {
  const [simulator, setSimulator] = useState<FluidSimulation | null>(null);

  const [memory, setMemory] = useState<WebAssembly.Memory | null>(null);

  useEffect(() => {
    if (width && height) {
      import(`../../webassembly/fluid/pkg`)
        .then((module) => {
          module.start();

          const simul = module.FluidSimulation.new(
            PARTICLE_COUNT,
            (Math.round(VIEWPORT_HEIGHT) * width) / height,
            Math.round(VIEWPORT_HEIGHT)
          );
          setSimulator(simul);
          onLoad();
        })
        .catch(console.error);
    }
  }, [height, onLoad, width]);

  useEffect(() => {
    import("../../webassembly/fluid/pkg/fluid_bg.wasm").then(({ memory }) => {
      setMemory(memory);
    });
  }, []);

  return (
    simulator &&
    memory && (
      <div style={{ width, height }}>
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            aspect: width / height,
            position: [0, 0, CAMERA_DISTANCE],
          }}
        >
          <Particles simulator={simulator} memory={memory} />
        </Canvas>
      </div>
    )
  );
};

export default memo(Fluid);
