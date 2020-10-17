import { useRef, useEffect } from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import MetaSphere from "../Services/MetaSphere/MetaSphere";
import useFullScreen from "../View/Hooks/useFullScreen";
import useClickHoverWander from "../View/Hooks/useClickHoverWander";
import CanvasDrawer from "../View/UI/CavnasDrawer/CanvasDrawer";

const MetaSphereElm = () => {
  const metaDrawer = useRef<MetaSphere | null>(null);
  const [width, height] = useFullScreen();
  const [focusPoint, mouseProps] = useClickHoverWander(width, height);
  useEffect(() => {
    metaDrawer.current = new MetaSphere(width, height);
  }, [height, width]);

  const artist = (ctx: CanvasRenderingContext2D) => {
    metaDrawer.current && metaDrawer.current.draw(ctx, focusPoint);
  };

  return (
    <MenuLayout color="white">
      <CanvasDrawer
        width={width}
        height={height}
        artist={artist}
        {...mouseProps}
      />
    </MenuLayout>
  );
};

export default MetaSphereElm;
