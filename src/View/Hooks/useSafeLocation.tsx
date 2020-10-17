/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import FlashScreen from "../UI/FlashScreen";

const useSafeLocation = (): [typeof location | null, JSX.Element | null] => {
  const [safeLocation, setSafeLocation] = useState<typeof location | null>(
    typeof location === "undefined" ? null : location
  );
  const [flash, setFlash] = useState<JSX.Element | null>(<FlashScreen />);
  useEffect(() => {
    if (typeof location === "undefined") {
      setSafeLocation(null);
    } else {
      setTimeout(() => {
        setSafeLocation(location);
        setFlash(null);
      });
    }
  }, []);

  return [safeLocation, flash];
};

// const dev = () => [location, null];

export default useSafeLocation;
