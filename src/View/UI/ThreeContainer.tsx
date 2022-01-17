import { memo, useEffect, useRef } from "react";
import Div100vh from "react-div-100vh";

interface Props {
  start: (x0: HTMLDivElement) => void;
  stop: (x0: HTMLDivElement) => void;
}

export default memo(function ThreeContainer({
  start,
  stop,
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
  return <Div100vh ref={container} style={{ width: "100%" }} {...otherProps} />;
});
