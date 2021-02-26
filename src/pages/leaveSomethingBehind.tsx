import getPath from "perfect-freehand";
import React, { PointerEventHandler, useState } from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

type Point = {
  x: number;
  y: number;
  pressure?: number | undefined;
};

const SVG_WIDTH = 700;
const SVG_HEIGHT = 700;

export default function Example() {
  const [marks, setMarks] = useState<
    {
      type: string;
      points: Point[];
    }[]
  >([]);

  const handlePointerDown: PointerEventHandler<SVGSVGElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMarks((ms) =>
      // I'm honestly not really sure what this pointer type thing is,
      // but it was in their examples, so we'll go with it and assume, for some reason, it could change for every mark
      ms.concat({
        type: e.pointerType,
        points: [
          {
            x: ((e.clientX - rect.left) / rect.width) * SVG_WIDTH,
            y: ((e.clientY - rect.top) / rect.height) * SVG_HEIGHT,
            pressure: e.pressure,
          },
        ],
      })
    );
  };

  const handlePointerMove: PointerEventHandler<SVGSVGElement> = (e) => {
    if (e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMarks((ms) => {
        // If, for some reason, there aren't any marks, just don't do anything.
        if (ms.length < 1) {
          return ms;
        }

        // Otherwise, return a copy, changing the last value with new points
        return ms.slice(0, ms.length - 1).concat({
          ...ms[ms.length - 1],
          points: [
            ...ms[ms.length - 1].points,
            {
              x: ((e.clientX - rect.left) / rect.width) * SVG_WIDTH,
              y: ((e.clientY - rect.top) / rect.height) * SVG_HEIGHT,
              pressure: e.pressure,
            },
          ],
        });
      });
    }
  };

  return (
    <>
      <SEO title="Leave Something Behind" />
      <MenuLayout color="black">
        <div className="container">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            style={{ touchAction: "none" }}
          >
            {marks.map((m, i) => (
              <path
                key={i}
                d={getPath(m.points, {
                  simulatePressure: m.type !== "pen",
                })}
              />
            ))}
          </svg>
        </div>
        <style jsx>
          {`
            .container {
              position: fixed;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            svg {
              width: min(80vw, 80vh);
              height: min(80vw, 80vh);
              border-radius: 50px;
              background: #ffffff;
              box-shadow: 35px 35px 70px #d9d9d9, -35px -35px 70px #ffffff;
            }

            svg:hover {
              cursor: crosshair !important;
            }
          `}
        </style>
      </MenuLayout>
    </>
  );
}
