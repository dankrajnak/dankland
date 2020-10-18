import { useState, useEffect } from "react";
import FlashScreen from "../UI/FlashScreen";

const useSafeWindow = (): [typeof window | null, JSX.Element | null] => {
  const [safeWindow, setSafeWindow] = useState<typeof window | null>(
    typeof window === "undefined" ? null : window
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
