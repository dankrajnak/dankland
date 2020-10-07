import * as React from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { FluidSimulation } from "../webassembly/fluid/pkg/fluid";
import Layout from "../View/Layout/Layout";
import SEO from "../View/Utility/seo";

const PARTICLE_COUNT = 1000;

const width = 800;
const height = 800;
const PERSPECTIVE_ANGLE = 75;
const CAMERA_DISTANCE = 30;

const VIEWPORT_HEIGHT =
  Math.tan((PERSPECTIVE_ANGLE / 2 / 180) * Math.PI) * CAMERA_DISTANCE * 2;

const Camera = (props: {
  position: [number, number, number];
  aspect: number;
}) => {
  const ref = React.useRef<THREE.PerspectiveCamera>();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  React.useEffect(() => {
    if (ref.current) {
      setDefaultCamera(ref.current);
    }
  }, [setDefaultCamera]);
  // Update it every frame
  useFrame(() => ref.current?.updateMatrixWorld());
  return (
    <perspectiveCamera
      ref={ref}
      args={[75, props.aspect, 0.1, 1000]}
      {...props}
    />
  );
};

const Particle = (props: {
  index: number;
  xArray: React.MutableRefObject<Float32Array>;
  yArray: React.MutableRefObject<Float32Array>;
}) => {
  const ref = React.useRef<THREE.Mesh>();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x =
        props.xArray.current[props.index] - VIEWPORT_HEIGHT / 2;
      ref.current.position.y =
        -props.yArray.current[props.index] + VIEWPORT_HEIGHT / 2;
      ref.current.position.z = 0;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[0.2, 8]} />
      <meshBasicMaterial color={props.index % 2 === 0 ? "blue" : "red"} />
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
  const xPos = React.useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.x(), PARTICLE_COUNT)
  );
  const yPos = React.useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.y(), PARTICLE_COUNT)
  );

  // const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  useFrame((_ctx, dt) => {
    simulator.simulate(
      window.scrollY,
      10000,
      0,
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

const Fluid = () => {
  const [simulator, setSimulator] = React.useState<FluidSimulation | null>(
    null
  );

  const [memory, setMemory] = React.useState<WebAssembly.Memory | null>(null);
  React.useEffect(() => {
    if (width && height) {
      import(`../webassembly/fluid/pkg`)
        .then((module) => {
          import("../webassembly/fluid/pkg/fluid_bg").then(({ memory }) => {
            const simul = module.FluidSimulation.new(
              PARTICLE_COUNT,
              Math.round(VIEWPORT_HEIGHT),
              Math.round(VIEWPORT_HEIGHT)
            );
            setSimulator(simul);
            setMemory(memory);
          });
        })
        .catch(console.error);
    }
  }, []);

  return (
    <Layout>
      <SEO title="Fluid" />
      {simulator && memory && (
        <div style={{ width, height }}>
          <Canvas>
            <Camera
              position={[0, 0, CAMERA_DISTANCE]}
              aspect={width / height}
            />
            <pointLight position={[10, 10, 10]} />
            <ambientLight />

            <Particles simulator={simulator} memory={memory} />
          </Canvas>
        </div>
      )}
    </Layout>
  );
};

export default Fluid;
