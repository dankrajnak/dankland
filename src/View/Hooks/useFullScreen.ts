import { useEffect, useMemo, useState } from "react";
import useSafeWindow from "./useSafeWindow";

type Config = {
  ignoreHeightUpdates: boolean;
};

const DEFAULT_CONFIG: Config = {
  ignoreHeightUpdates: false,
};

const useFullScreen = (
  config: Partial<Config> = DEFAULT_CONFIG
): [number, number, JSX.Element | null] => {
  const safeConfig = useMemo(() => ({ ...DEFAULT_CONFIG, ...config }), [
    config,
  ]);
  const [window, flash] = useSafeWindow();
  const [width, setWidth] = useState(window ? window.innerWidth : 0);
  const [height, setHeight] = useState(window ? window.innerHeight : 0);

  //Initial resize
  useEffect(() => {
    if (width === 0 && height === 0 && window) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, [height, width, window]);

  useEffect(() => {
    const resize = () => {
      if (window) {
        setWidth(window.innerWidth);
        if (!safeConfig.ignoreHeightUpdates) {
          setHeight(window.innerHeight);
        }
      }
    };
    resize();
    const listener = window && window.addEventListener("resize", resize);
    return () => {
      window && listener && window.removeEventListener("resize", listener);
    };
  }, [safeConfig.ignoreHeightUpdates, window]);

  return [width, height, flash];
};

export default useFullScreen;
