import { memo, useEffect, useRef } from "react";
import useSafeWindow from "../Hooks/useSafeWindow";

type Props = {
  width: number;
  height: number;
  getContext: (context: CanvasRenderingContext2D) => void;
} & React.HTMLAttributes<HTMLCanvasElement>;

/**
 * A wrapper around the canvas element which prevents the canvas from
 * unmounting unless the width or height changes and provides a method
 * to get a rendering context.
 * @param {*} props
 * @param {*} ref
 */
const Canvas = ({ width, height, getContext, ...otherProps }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [window] = useSafeWindow();
  useEffect(() => {
    const context = canvasRef.current && canvasRef.current.getContext("2d");
    if (context) {
      getContext(context);
    }
  }, [getContext, window]);
  return (
    <canvas ref={canvasRef} width={width} height={height} {...otherProps} />
  );
};

export default memo(Canvas);
