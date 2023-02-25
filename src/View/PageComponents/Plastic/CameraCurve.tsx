import { Line } from "@react-three/drei";
import { useControls } from "leva";
import { CatmullRomCurve3, Vector3 } from "three";

const curveTypes = ["centripetal", "catmullrom", "chordal"];

export const useCameraCurve = (): CatmullRomCurve3 => {
  const { first, second, third, fourth, tension, type } = useControls(
    "camera curve",
    {
      first: { x: 30, y: 4, z: -140 },
      second: { x: 15, y: 4, z: -180 },
      third: { x: -2, y: 10, z: -190 },
      fourth: { x: 5, y: 40, z: -320 },
      tension: { value: 0.5, min: 0, max: 1 },
      type: { value: 0, min: 0, max: 2, step: 1 },
    }
  );
  const curve = new CatmullRomCurve3(
    [
      new Vector3(first.x, first.y, first.z),
      new Vector3(second.x, second.y, second.z),
      new Vector3(third.x, third.y, third.z),
      new Vector3(fourth.x, fourth.y, fourth.z),
    ],
    false,
    curveTypes[type],
    tension
    // "Uniform"
  );
  return curve;
};

const CameraCurve = () => {
  const curve = useCameraCurve();

  return (
    <Line
      points={curve.getPoints(100)}
      color="red"
      lineWidth={1}
      matrixWorldAutoUpdate={undefined}
      getObjectsByProperty={undefined}
      getVertexPosition={undefined}
      forceSinglePass={undefined}
    />
  );
};

export default CameraCurve;
