import {
  OrbitControls,
  Reflector,
  Scroll,
  ScrollControls,
  Stats,
  useScroll,
} from "@react-three/drei";
import Head from "next/head";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import React, { Suspense } from "react";
import * as THREE from "three";
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

const ORIGIN = new THREE.Vector3();

const Home: NextPage = () => {
  return (
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
  useFrame((three) => {
    const yStartingPosition = 300;
    const yEndingPosition = 100;
    three.camera.position.x = 0;
    three.camera.position.y =
      yStartingPosition -
      thing.range(0, 1) * (yStartingPosition - yEndingPosition);
    three.camera.position.z = thing.range(0, 1) * 280;
    three.camera.lookAt(ORIGIN);
  });
  const { size } = useThree();

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

        <Scroll html>
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "200vh",
              height: size.height,
              width: size.width,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Hey, my name is Dan.</h1>
            <style jsx>
              {`
                @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");
                h1 {
                  font-family: "Raleway", -apple-system, BlinkMacSystemFont,
                    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                }
              `}
            </style>
          </div>
        </Scroll>
        <Reflector
          position={[0, -5, 0]}
          args={[500, 500, 4]} // PlaneBufferGeometry arguments
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
          mirror={0.6} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          mixBlur={0} // How much blur mixes with surface roughness (default = 0), note that this can affect performance
          mixStrength={1} // Strength of the reflections
          depthScale={2} // Scale the depth factor (0 = no depth, default = 0)
          rotation={[-Math.PI / 2, 0, 0]}
          debug={0}
        >
          {(Material, props) => <Material {...props} />}
        </Reflector>
        <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry args={[2000, 2000, 4]} />
          <meshBasicMaterial color="black" />
        </mesh>
        {/* <Stars
          radius={200} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={8} // Size factor (default=4)
          fade // Faded dots (default=false)
        /> */}
      </Suspense>
    </>
  );
};
export default Home;
