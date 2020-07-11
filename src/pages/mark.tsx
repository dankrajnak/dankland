import * as React from "react";
import Vector2d from "../Domain/Vector/Vector2d";
import useClickHoverWander from "../View/Hooks/useClickHoverWander";
import useFullScreen from "../View/Hooks/useFullScreen";
import MenuLayout from "../View/Layout/MenuLayout";

type SProps = {
  screen: number[][];
  width: number;
  height: number;
};

const getPixelPos = (pixelIndex: number, rowLength: number, width: number) =>
  ((pixelIndex + 1) * width) / (rowLength + 1);

const SVGScreen = ({ screen, width, height, ...otherProps }: SProps) => (
  <>
    <svg width={width} height={height} {...otherProps}>
      {screen.map((row, rowIndex) =>
        row.map((pixel, pixelIndex) => (
          <circle
            stroke="gold"
            fill="none"
            key={`${rowIndex}-${pixelIndex}`}
            cx={getPixelPos(pixelIndex, row.length, width)}
            cy={getPixelPos(rowIndex, screen.length, height)}
            r={pixel}
          ></circle>
        ))
      )}
    </svg>
    <style jsx>
      {`
        svg {
          border: solid black 1px;
          background-color: black;
        }
      `}
    </style>
  </>
);

const Mark = () => {
  const [width, height] = useFullScreen();
  const [screen, setScreen] = React.useState<number[][]>(
    new Array(25).fill(new Array(25).fill(1))
  );
  const [mousePosition, mouseProps] = useClickHoverWander(width, height);

  React.useEffect(() => {
    setScreen((s) =>
      s.map((row, rowIndex) =>
        row.map((pixel, pixelIndex) =>
          Math.min(
            width /
              new Vector2d(
                getPixelPos(pixelIndex, row.length, width),
                getPixelPos(rowIndex, screen.length, height)
              ).distanceTo(mousePosition || new Vector2d(0, 0)),
            20
          )
        )
      )
    );
  }, [mousePosition, screen.length]);

  if (!width || !height) {
    return null;
  }
  return (
    <MenuLayout>
      <SVGScreen
        width={width}
        height={height}
        screen={screen}
        {...mouseProps}
      />
    </MenuLayout>
  );
};

export default Mark;
