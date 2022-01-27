import { Html, Reflector, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import { ReactNode, Suspense, useRef, useState } from "react";
import {
  Bloom,
  EffectComposer,
  SMAA,
  SSAO,
  Vignette,
} from "@react-three/postprocessing";
import { Leva, useControls } from "leva";
import Cloth from "../View/PageComponents/Plastic/Cloth";
import Div100vh from "react-div-100vh";
import SEO from "../View/Utility/seo";
import { Vector3 } from "three";
import dynamic from "next/dynamic";
import Card from "../Domain/Card/Card";
import Layout from "../View/Layout/Layout";

const LinkLoading = () => (
  <>
    <div />
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}</style>
  </>
);

// Dynamically import all the cards to reduce initial load.
const Lorenz = dynamic(() => import("../View/PageComponents/Homepage/Lorenz"), {
  loading: () => <LinkLoading />,
});
const PerspectivePreview = dynamic(
  () => import("../View/PageComponents/Menu/PerspectivePreview"),
  { loading: () => <LinkLoading /> }
);
const HallwayPreview = dynamic(
  () => import("../View/PageComponents/Menu/HallwayPreview"),
  { loading: () => <LinkLoading /> }
);
const MetaSpherePreview = dynamic(
  () => import("../View/PageComponents/Menu/MetaSpherePreview"),
  { loading: () => <LinkLoading /> }
);
const JustSomeThoughtsPreview = dynamic(
  () => import("../View/PageComponents/Menu/JustSomeThoughtsPreview"),
  { loading: () => <LinkLoading /> }
);

const cards: Card[] = [
  {
    background: ({ width, height }) => (
      <Lorenz width={width} height={height} colorful />
    ),
    title: "Again",
    description: "Just to impress you",
    link: "/again",
  },
  {
    background: PerspectivePreview,
    title: "Perspective",
    description: "I spent two fucking days making a square move",
    link: "/perspective",
  },
  {
    background: HallwayPreview,
    title: "Hallway",
    description: (
      <div>
        <em className="mute">(Almost)</em> Shamelessly{" "}
        <em className="mute">(basically)</em> stolen{" "}
        <em className="mute">(from a tutorial)</em>
      </div>
    ),
    link: "/hallway",
  },
  {
    background: MetaSpherePreview,
    title: "Meta sphere",
    description: "Just go have some fun, kid",
    link: "/metaSphere",
  },
  {
    background: JustSomeThoughtsPreview,
    title: "Just Some Thought",
    description: "I just, well, here you go",
    link: "/justSomeThought",
  },
];

const ORIGIN = new Vector3();

const Home: NextPage = () => {
  return (
    <Layout>
      <Div100vh>
        <SEO title="plastic" />
        <Leva hidden />
        <Canvas shadows>
          {/* <Stats showPanel={0} /> */}
          <Suspense fallback={null}>
            <ScrollControls pages={3}>
              <Inner />
            </ScrollControls>
          </Suspense>
        </Canvas>
        <style jsx global>
          {`
            body {
              background-color: black;
            }
          `}
        </style>
      </Div100vh>
    </Layout>
  );
};

const Title = ({ text, show }: { text: ReactNode; show?: boolean }) => {
  return (
    <>
      <h1
        className={`text-3xl font-sansDisplay w-[300px] text-center font-thin text-white transition duration-500 ${
          show ? "opacity-100 show" : "opacity-0"
        }`}
      >
        {text}
      </h1>
      <style jsx>
        {`
          h1:not(.show) {
            transform: rotateX(45deg);
          }
        `}
      </style>
    </>
  );
};

const TextContent = () => {
  const scroll = useScroll();
  const [showFirst, setShowFirst] = useState(false);
  useFrame(() => {
    setShowFirst(scroll.offset < 0.05);
  });

  return (
    <Html center>
      <Title
        text={
          <>
            <b>Hi.</b> My name is Dan.
          </>
        }
        show={showFirst}
      />
    </Html>
  );
};

const Inner = () => {
  const { threshold, smoothing, height, on } = useControls("bloom effect", {
    on: true,
    threshold: { value: 0, min: 0, max: 1 },
    smoothing: { value: 0.9, min: 0, max: 1, step: 0.1 },
    height: { value: 500, min: 50, max: 800 },
  });
  const thing = useScroll();

  const rotation = useRef(0);
  const rotationSpeed = useRef(0);
  const lastTime = useRef(0);

  useFrame((three) => {
    const yStartingPosition = 300;
    const yEndingPosition = 100;
    const mousePos = three.mouse;
    const time = three.clock.elapsedTime;
    const rotationSpeedMax = 0.01;
    rotationSpeed.current += mousePos.x * (time - lastTime.current) * 0.1;

    rotationSpeed.current = Math.min(
      Math.max(rotationSpeed.current, -rotationSpeedMax),
      rotationSpeedMax
    );

    rotation.current += rotationSpeed.current;
    lastTime.current = time;

    three.camera.position.y =
      yStartingPosition -
      thing.range(0, 1) * (yStartingPosition - yEndingPosition);

    const radius = thing.range(0, 1) * 280;
    three.camera.position.z = radius * Math.sin(rotation.current);
    three.camera.position.x = radius * Math.cos(rotation.current);

    three.camera.position.y += mousePos.y * 50;

    three.camera.lookAt(ORIGIN);
  });

  return (
    <>
      {on && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={threshold}
            luminanceSmoothing={smoothing}
            height={height}
          />
          <Vignette eskil offset={0.1} darkness={1.1} />
          <SMAA />
          <SSAO />
        </EffectComposer>
      )}
      <Suspense fallback={null}>
        <Cloth />
        <TextContent />
        <Reflector
          position={[0, -5, 0]}
          args={[500, 500, 4]} // PlaneBufferGeometry arguments
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
          mirror={0.95} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          mixStrength={0.3} // Strength of the reflections
          rotation={[-Math.PI / 2, 0, 0]}
          mixBlur={0.3}
        >
          {(Material, props) => <Material {...props} />}
        </Reflector>
        <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry args={[2000, 2000, 4]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </Suspense>
    </>
  );
};
export default Home;
