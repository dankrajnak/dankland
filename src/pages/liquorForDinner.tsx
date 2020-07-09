import * as React from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

const CIRCLE_RADIUS = 30;
const STROKE_WIDTH = 1;
const LiquorForDinner = () => (
  <MenuLayout>
    <SEO title="Liquor For Dinner" />
    <div className="container" title="it's all I could think of">
      <h2 className="content">
        <svg
          width={(CIRCLE_RADIUS + STROKE_WIDTH) * 2}
          height={(CIRCLE_RADIUS + STROKE_WIDTH) * 2}
        >
          <circle
            cx={CIRCLE_RADIUS + STROKE_WIDTH}
            cy={CIRCLE_RADIUS + STROKE_WIDTH}
            r={CIRCLE_RADIUS}
            stroke="white"
            strokeWidth={STROKE_WIDTH}
          />
        </svg>
      </h2>
    </div>
    <style jsx>
      {`
        .container {
          position: fixed;
          background-color: black;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          color: white;
        }
      `}
    </style>
  </MenuLayout>
);

export default LiquorForDinner;
