import { useState, useEffect } from "react";
import FlashScreen from "../UI/FlashScreen";
import useIsBrowser from "./useIsBrowser";

const useSafeWindow = (): [typeof window | null, JSX.Element | null] => {
  const inBrowser = useIsBrowser();
  const [safeWindow, setSafeWindow] = useState<typeof window | null>(
    inBrowser ? window : null
  );
  const [flash, setFlash] = useState<JSX.Element | null>(<FlashScreen />);
  useEffect(() => {
    if (typeof window === "undefined") {
      setSafeWindow(null);
    } else {
      setTimeout(() => {
        setSafeWindow(window);
        setFlash(null);
      });
    }
  }, []);

  return [safeWindow, flash];
};

export default useSafeWindow;
