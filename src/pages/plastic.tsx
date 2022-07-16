import {
  Billboard,
  Html,
  OrbitControls,
  Reflector,
  ScrollControls,
  Stats,
  Text,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import React, {
  ReactNode,
  Suspense,
  useCallback,
  createContext,
  useMemo,
  useRef,
  useState,
  FC,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  SMAA,
  SSAO,
  Vignette,
} from "@react-three/postprocessing";
import { Leva, useControls } from "leva";
import Cloth from "../View/PageComponents/Plastic/Cloth";
import Div100vh from "react-div-100vh";
import SEO from "../View/Utility/seo";
import { Uniform, Vector2, Vector3 } from "three";
import dynamic from "next/dynamic";
import Card from "../Domain/Card/Card";
import Layout from "../View/Layout/Layout";
import Link from "next/link";
import { NextRouter, Router, useRouter, withRouter } from "next/router";
import { debounce } from "debounce";
import { useThrottle, useThrottleFn } from "react-use";
import Birbs6 from "../View/PageComponents/Plastic/Birbs6";
import CameraCurve, {
  useCameraCurve,
} from "../View/PageComponents/Plastic/CameraCurve";

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

const phasesWidth = [3, 2, cards.length];

const NUM_PAGES_FOR_SCROLL = 2; //phasesWidth.reduce((sum, phase) => sum + phase, 0);

const BIRBS_DISTANCE = 180;

const testRouter = createContext<NextRouter | null>(null);
const RouterProvier = ({
  children,
  router,
}: PropsWithChildren<{ router: NextRouter }>) => (
  <testRouter.Provider value={router}>{children}</testRouter.Provider>
);
const useTestRouter = () => {
  return useContext(testRouter);
};

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Div100vh>
        <SEO title="plastic" />
        <Leva hidden />
        <Canvas shadows>
          <RouterProvier router={router}>
            <Suspense fallback={null}>
              <ScrollControls pages={NUM_PAGES_FOR_SCROLL}>
                <Inner />
              </ScrollControls>
            </Suspense>
          </RouterProvier>
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

const Menu = withRouter(
  ({ card, router }: { card: Card; router: NextRouter }) => {
    return (
      <>
        <a
          style={{ width: 300, height: 300 }}
          onClick={() => {
            console.log("click");
            router?.push(card.link);
          }}
        >
          <card.background width={300} height={300} />
        </a>
      </>
    );
  }
);

const Inner = () => {
  const { on } = useControls("bloom effect", {
    on: true,
  });

  const scroll = useScroll();

  const [_billboardVisible, setBillboardVisible] = useState(false);

  // useFrame((three) => {
  //   // Divide Scroll rotation into phases.
  //   const mousePos = three.mouse;
  //   // if (mousePos) {
  //   //   setSMouse(
  //   //     new Vector2(Math.abs(mousePos.x * 0.005), Math.abs(mousePos.y * 0.005))
  //   //   );
  //   // }

  //   const time = three.clock.elapsedTime;
  //   const rotationSpeedMax = 0.01;
  //   rotationSpeed.current += mousePos.x * (time - lastTime.current) * 0.02;

  //   rotationSpeed.current = Math.min(
  //     Math.max(rotationSpeed.current, -rotationSpeedMax),
  //     rotationSpeedMax
  //   );

  //   rotation.current += rotationSpeed.current;
  //   lastTime.current = time;

  //   // Firt phase
  //   if (scroll.visible(0, phasesWidth[0] / NUM_PAGES_FOR_SCROLL)) {
  //     const radius =
  //       scroll.range(0, (phasesWidth[0] - 1) / NUM_PAGES_FOR_SCROLL) * 280;
  //     three.camera.position.z = radius * Math.sin(rotation.current);
  //     three.camera.position.x = radius * Math.cos(rotation.current);

  //     setBillboardVisible(false);
  //     // the first phase is 1/3 of the total
  //     const yStartingPosition = 300;
  //     const yEndingPosition = 100;

  //     three.camera.position.y =
  //       yStartingPosition -
  //       scroll.range(0, ((phasesWidth[0] - 1) / NUM_PAGES_FOR_SCROLL) * 0.8) *
  //         (yStartingPosition - yEndingPosition);

  //     three.camera.position.y += mousePos.y * 50;
  //     three.camera.lookAt(ORIGIN);
  //   } else if (
  //     scroll.visible(
  //       phasesWidth[0] / NUM_PAGES_FOR_SCROLL,
  //       phasesWidth[1] / NUM_PAGES_FOR_SCROLL
  //     ) ||
  //     true
  //   ) {
  //     setBillboardVisible(true);
  //     // move beneath the Cloth thing.
  //     const yStartingPosition = 100;
  //     const yEndingPosition = -400;
  //     three.camera.position.y =
  //       yStartingPosition -
  //       scroll.range(
  //         phasesWidth[0] / NUM_PAGES_FOR_SCROLL,
  //         phasesWidth[1] / NUM_PAGES_FOR_SCROLL
  //       ) *
  //         (yStartingPosition - yEndingPosition);

  //     three.camera.lookAt(
  //       0,
  //       three.camera.position.y > 0 ? 0 : three.camera.position.y,
  //       0
  //     );
  //   } else {
  //   }
  // });

  const [visibleCards, setVisibleCards] = useState(cards.map((_) => false));
  // useFrame(() => {
  //   // calculate which cards are visible
  //   const newVisibleCards = visibleCards.map((_, i) =>
  //     scroll.visible(
  //       (NUM_PAGES_FOR_SCROLL - (cards.length - i)) / NUM_PAGES_FOR_SCROLL,
  //       1 / NUM_PAGES_FOR_SCROLL
  //     )
  //   );
  //   if (newVisibleCards.some((val, i) => visibleCards[i] !== val)) {
  //     setVisibleCards(newVisibleCards);
  //   }
  // });
  const anyCardsVisible = visibleCards.some((visible) => visible);
  const billboardVisible = _billboardVisible && !anyCardsVisible;
  const [shouldShowScrollMessage, setShouldScrollMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scroll.offset === 0) {
        console.log("RUN");
        setShouldScrollMessage(true);
      }
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [scroll.offset]);

  const router = useTestRouter();

  const scrollTextRef = useRef<any>();

  const cameraPath = useCameraCurve();
  const [showCloth, setShowCloth] = useState(false);
  useFrame(({ camera }) => {
    const cameraPosition = cameraPath.getPoint(scroll.range(0, 1));
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(new Vector3(0, 0, -BIRBS_DISTANCE));
    if (!showCloth && scroll.offset > 0.2) {
      setShowCloth(true);
    }

    if (scrollTextRef.current) {
      if (shouldShowScrollMessage) {
        const maxOpacity = 0.4;
        const progress = scroll.range(1 / 16, 1 / 8);
        scrollTextRef.current.fillOpacity = maxOpacity * (1 - progress);
        scrollTextRef.current.fontSize = 12 * (1 - progress / 2);
        if (progress >= 1 && shouldShowScrollMessage) {
          setShouldScrollMessage(false);
        }
      } else {
        scrollTextRef.current.fillOpacity = 0;
      }
    }
  });

  return (
    <>
      {on && (
        <EffectComposer>
          <Vignette eskil offset={0.1} darkness={1.1} />

          <SMAA />
          <SSAO />
        </EffectComposer>
      )}
      <Suspense fallback={null}>
        <Cloth />
        <Html center position={[0, -400, 0]}>
          <div
            className={`text-white font-serifDisplay font-thin transition-opacity duration-700 ${
              anyCardsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div style={{ width: 300, height: 300 }}>
              <Menu card={cards[0]} />
            </div>
          </div>
        </Html>
        <group position={[0, -18, -BIRBS_DISTANCE]}>
          <Birbs6 scale={1.5} />
          <group>
            <Text
              ref={scrollTextRef}
              position={[0, 30, 0]}
              fontSize={12}
              font="/fonts/PPEiko-Medium.otf"
            >
              Scroll
            </Text>
          </group>
        </group>
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
        <mesh position={[0, -50, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry args={[2000, 2000, 4]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </Suspense>
    </>
  );
};
export default Home;
