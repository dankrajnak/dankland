import * as React from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import useClickHoverWander from "../View/Hooks/useClickHoverWander";
import Vector2d from "../Domain/Vector/Vector2d";

const colors = ["#CD1E33", "#F8B240", "#35687C"];

const ZeroVector = new Vector2d(0, 0);

const LavaLampExperiment = () => {
  const [circleA, circleAHandlers] = useClickHoverWander(
    1000,
    500,
    ZeroVector,
    { tension: 12, friction: 5 }
  );
  const [circleB, circleBHandlers] = useClickHoverWander(
    1000,
    500,
    ZeroVector,
    {
      tension: 20,
      friction: 3,
    }
  );
  const [circleC, circleCHandlers] = useClickHoverWander(
    1000,
    500,
    ZeroVector,
    {
      tension: 8,
      friction: 5,
    }
  );

  return (
    <MenuLayout>
      <div
        className="svg-holder"
        onClick={(e) => {
          circleAHandlers.onClick(e);
          circleBHandlers.onClick(e);
          circleCHandlers.onClick(e);
        }}
        onMouseMove={(e) => {
          circleBHandlers.onMouseMove(e);
          circleAHandlers.onMouseMove(e);
          circleCHandlers.onMouseMove(e);
        }}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          xmlSpace="preserve"
          style={{ border: "solid 1px black" }}
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                result="cm"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#212121"></rect>
          <g filter="url(#goo)">
            <circle
              cx={circleA.x}
              cy={circleA.y}
              r={50}
              fill={colors[0]}
            ></circle>
            <circle
              cx={circleB.x}
              cy={circleB.y}
              r={50}
              fill={colors[1]}
            ></circle>
            <circle
              cx={circleC.x}
              cy={circleC.y}
              r={50}
              fill={colors[2]}
            ></circle>
          </g>
        </svg>
      </div>
      <style jsx>
        {`
          .svg-holder {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100%;
            background-color: #fff7ec;
          }
        `}
      </style>
    </MenuLayout>
  );
};

export default LavaLampExperiment;
