import { memo, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { FluidSimulation } from "../../webassembly/fluid/pkg/fluid";

const PARTICLE_COUNT = 1000;
const PERSPECTIVE_ANGLE = 75;
const CAMERA_DISTANCE = 30;

const VIEWPORT_HEIGHT =
  Math.tan((PERSPECTIVE_ANGLE / 2 / 180) * Math.PI) * CAMERA_DISTANCE * 2;

const Camera = (props: {
  position: [number, number, number];
  aspect: number;
}) => {
  const ref = useRef<THREE.PerspectiveCamera>();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  useEffect(() => {
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

const PARTICLE_COLORS = [
  "#4AA0C9", // red
  "#FF6466", // blue
  "#FFA879", // orange
  "#90CF9C", // green
  "#FFE596", // yellow
];

const Particle = (props: {
  index: number;
  xArray: React.MutableRefObject<Float32Array>;
  yArray: React.MutableRefObject<Float32Array>;
}) => {
  const ref = useRef<THREE.Mesh>();
  const { size } = useThree();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x =
        props.xArray.current[props.index] -
        ((VIEWPORT_HEIGHT / 2) * size.width) / size.height;
      ref.current.position.y =
        props.yArray.current[props.index] - VIEWPORT_HEIGHT / 2;
      ref.current.position.z = 0;
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
  mousePosition,
}: {
  simulator: FluidSimulation;
  memory: WebAssembly.Memory;
  mousePosition: React.MutableRefObject<[number, number]>;
}) => {
  const xPos = useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.x(), PARTICLE_COUNT)
  );
  const yPos = useRef<Float32Array>(
    new Float32Array(memory.buffer, simulator.y(), PARTICLE_COUNT)
  );

  // const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  useFrame((_ctx, dt) => {
    simulator.simulate(
      -window.scrollY,
      mousePosition.current[0],
      mousePosition.current[1],
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
          import("../../webassembly/fluid/pkg/fluid_bg").then(({ memory }) => {
            const simul = module.FluidSimulation.new(
              PARTICLE_COUNT,
              (Math.round(VIEWPORT_HEIGHT) * width) / height,
              Math.round(VIEWPORT_HEIGHT)
            );
            setSimulator(simul);
            setMemory(memory);
            onLoad();
          });
        })
        .catch(console.error);
    }
  }, [height, onLoad, width]);

  const mousePosition = useRef<[number, number]>([0, 0]);

  return (
    simulator &&
    memory && (
      <div style={{ width, height }}>
        <Canvas
          style={{
            backgroundColor: "#272731",
          }}
          onMouseMove={(event: React.MouseEvent) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            mousePosition.current = [
              ((event.clientX - bounds.left) / width) *
                VIEWPORT_HEIGHT *
                (width / height),

              VIEWPORT_HEIGHT -
                ((event.clientY - bounds.top) / height) * VIEWPORT_HEIGHT,
            ];
          }}
          onMouseOut={() => {
            mousePosition.current = [10000, 1000];
          }}
        >
          <Camera position={[0, 0, CAMERA_DISTANCE]} aspect={width / height} />
          <ambientLight />

          <Particles
            simulator={simulator}
            memory={memory}
            mousePosition={mousePosition}
          />
        </Canvas>
      </div>
    )
  );
};

export default memo(Fluid);
