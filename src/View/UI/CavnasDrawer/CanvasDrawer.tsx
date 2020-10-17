import Canvas from "../Canvas";
import useSafeWindow from "../../Hooks/useSafeWindow";
import { memo, useEffect, useRef } from "react";

interface Props {
  width: number;
  height: number;
  initializeCanvas?: (context: CanvasRenderingContext2D) => void;
  artist: (context: CanvasRenderingContext2D, dt: number) => void;
  fps?: number | null;
}

const CanvasDrawer = ({
  width,
  height,
  initializeCanvas,
  artist,
  fps,
  ...otherProps
}: Props) => {
  const context: React.MutableRefObject<CanvasRenderingContext2D | null> = useRef(
    null
  );
  const requestedFrame: React.MutableRefObject<number | null> = useRef(null);

  const getContext = useRef(
    (c: CanvasRenderingContext2D) => (context.current = c)
  );
  useEffect(() => {
    const draw = (context: CanvasRenderingContext2D) => {
      let then = performance.now();
      const renderFrame = () => {
        requestedFrame.current = requestAnimationFrame((timestamp) => {
          renderFrame();
          const delta = timestamp - then;
          if (!fps) {
            artist(context, delta);
          } else {
            const interval = 1000 / fps;
            if (delta > interval) {
              then = timestamp - (delta % interval);
              artist(context, delta);
            }
          }
        });
      };
      renderFrame();
    };

    if (context.current) {
      if (initializeCanvas) {
        initializeCanvas(context.current);
      }
      draw(context.current);
    }
    return () => {
      requestedFrame.current && cancelAnimationFrame(requestedFrame.current);
    };
  });

  const flash = useSafeWindow()[1];

  if (flash) {
    return flash;
  }

  return (
    <Canvas
      getContext={getContext.current}
      width={width}
      height={height}
      {...otherProps}
    />
  );
};

export default memo(CanvasDrawer);
