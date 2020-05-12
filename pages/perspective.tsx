import * as React from "react";
import styled from "styled-components";
import useFullScreen from "../src/View/Hooks/useFullScreen";
import PerspectiveSquare from "../src/Services/PerspectiveSquare/PerspectiveSquare.service";
import Square from "../src/Domain/Square/Square";
import Vector2d from "../src/Domain/Vector/Vector2d";
import OriginalPerspectiveSquareDrawer from "../src/Services/PerspectiveSquare/Drawers/Original.service";
import MenuLayout from "../src/View/Layout/MenuLayout";
import SEO from "../src/View/Utility/seo";
import useClickHoverWander from "../src/View/Hooks/useClickHoverWander";
import CanvasDrawer from "../src/View/UI/CavnasDrawer/CanvasDrawer";
import PersepctiveSquareDrawer from "../src/Services/PerspectiveSquare/Drawers/Drawer.interface";

const SQUARE_WIDTH = 300;

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Perspective = () => {
  const [width, height, flash] = useFullScreen();
  const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  const perspectiveSquare = React.useRef<PerspectiveSquare | null>(null);
  const squareDrawer = React.useRef<PersepctiveSquareDrawer | null>(null);

  const initializeCanvas = (ctx: CanvasRenderingContext2D) => {
    //Create the squares.
    perspectiveSquare.current = new PerspectiveSquare(
      new Square(
        SQUARE_WIDTH,
        new Vector2d((width - SQUARE_WIDTH) / 2, (height + SQUARE_WIDTH) / 2)
      ),
      100
    );

    squareDrawer.current = new OriginalPerspectiveSquareDrawer(ctx, {
      mapper: (v: Vector2d) => new Vector2d(v.x, height - v.y),
      lineColor: "#04D9C4",
    });
  };

  const artist = (ctx: CanvasRenderingContext2D) => {
    if (!squareDrawer.current || !perspectiveSquare.current) {
      return;
    }
    ctx.fillStyle = "#0D0D0D";
    ctx.fillRect(0, 0, width, height);
    squareDrawer.current.draw(
      perspectiveSquare.current.getSquares(
        new Vector2d(focusPoint.x, height - focusPoint.y)
      ),
      focusPoint.clone()
    );
  };

  if (flash) {
    return flash;
  }

  return (
    <MenuLayout color={"white"}>
      <SEO title="Perspective" />
      <FullScreen>
        <CanvasDrawer
          width={width}
          height={height}
          initializeCanvas={initializeCanvas}
          artist={artist}
          {...mouseProps}
        />
      </FullScreen>
    </MenuLayout>
  );
};

export default Perspective;
