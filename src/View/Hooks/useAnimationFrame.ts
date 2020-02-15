import * as React from "react";
import useSafeWindow from "./useSafeWindow";

const useAnimationFrame = (render: () => void) => {
  const reqId = React.useRef<number | null>(null);
  const [safeWindow] = useSafeWindow();

  const start = React.useMemo(
    () => () => {
      if (!safeWindow) {
        return;
      }
      reqId.current = safeWindow.requestAnimationFrame(() => {
        render();
        start();
      });
    },
    [render, safeWindow]
  );

  const stop = React.useMemo(
    () => () => {
      if (!safeWindow) {
        return;
      }
      reqId.current && safeWindow.cancelAnimationFrame(reqId.current);
    },
    [safeWindow]
  );

  return [start, stop];
};

export default useAnimationFrame;
