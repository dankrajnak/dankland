import { useRef } from "react";
import PerspectiveSquare from "../Services/PerspectiveSquare/PerspectiveSquare.service";
import Square from "../Domain/Square/Square";
import Vector2d from "../Domain/Vector/Vector2d";
import OriginalPerspectiveSquareDrawer from "../Services/PerspectiveSquare/Drawers/Original.service";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";
import useClickHoverWander from "../View/Hooks/useClickHoverWander";
import CanvasDrawer from "../View/UI/CavnasDrawer/CanvasDrawer";
import PersepctiveSquareDrawer from "../Services/PerspectiveSquare/Drawers/Drawer.interface";
import { useWindowSize } from "react-use";

const SQUARE_WIDTH = 300;

const Perspective = () => {
  const { width, height } = useWindowSize(0, 0);
  const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  const perspectiveSquare = useRef<PerspectiveSquare | null>(null);
  const squareDrawer = useRef<PersepctiveSquareDrawer | null>(null);

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

  if (!width || !height) {
    return null;
  }

  return (
    <MenuLayout color={"white"}>
      <SEO title="Perspective" />
      <div className="fulscreen">
        <CanvasDrawer
          width={width}
          height={height}
          initializeCanvas={initializeCanvas}
          artist={artist}
          {...mouseProps}
        />
      </div>
      <style jsx>
        {`
          .full-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </MenuLayout>
  );
};

export default Perspective;
