import { useEffect, useMemo, useState } from "react";
import useIsBrowser from "./useIsBrowser";
import { useRafState } from "react-use";
import debounce from "debounce";

type Config = {
  ignoreHeightUpdates: boolean;
  initialWidth: number;
  initialHeight: number;
};

const DEFAULT_CONFIG: Config = {
  ignoreHeightUpdates: false,
  initialWidth: 0,
  initialHeight: 0,
};

const useFullScreen = (
  config: Partial<Config> = DEFAULT_CONFIG
): { width: number; height: number } => {
  const isBrowser = useIsBrowser();
  const safeConfig = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...config }),
    [config]
  );
  const [width, setWidth] = useRafState(
    isBrowser ? window.innerWidth : safeConfig.initialWidth
  );
  const [height, setHeight] = useRafState(
    isBrowser ? window.innerHeight : safeConfig.initialHeight
  );

  useEffect(() => {
    if (isBrowser) {
      const resize = debounce(() => {
        setWidth(window.innerWidth);
        if (!safeConfig.ignoreHeightUpdates) {
          setHeight(window.innerHeight);
        }
      }, 1000);
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, [isBrowser, safeConfig.ignoreHeightUpdates, setHeight, setWidth]);

  return { width, height };
};

export default useFullScreen;
