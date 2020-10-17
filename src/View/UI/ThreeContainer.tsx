import { memo, useEffect, useRef } from "react";

interface Props {
  start: (x0: HTMLDivElement) => void;
  stop: (x0: HTMLDivElement) => void;
  width: number;
  height: number;
}

export default memo(function ThreeContainer({
  start,
  stop,
  width,
  height,
  ...otherProps
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current) {
      const curValOfContainer = container.current;
      start(curValOfContainer);
      return () => {
        stop(curValOfContainer);
      };
    }
  }, [start, stop]);
  return (
    <div
      ref={container}
      style={{ width: width + "px", height: height + "px" }}
      {...otherProps}
    />
  );
});
