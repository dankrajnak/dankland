// flow
import { useEffect, useRef } from "react";
import throttle from "../../Services/Throttle/Throttle.service";

export const useScroll = (
  listener: (x0: number) => any,
  throttleAmount = 300
): void => {
  const lastTouch = useRef<number>();
  useEffect(() => {
    const throttledFunc = throttle(
      (deltaY: number) => listener(deltaY),
      throttleAmount
    );
    const wheelHandler = (e: WheelEvent) => {
      console.log("scroll event", e);

      throttledFunc(e.deltaY);
    };
    const touchHandler = (e: TouchEvent) => {
      const thisY = e.touches.item(0)?.clientY;
      if (thisY && lastTouch.current) {
        throttledFunc(thisY - lastTouch.current);
      }
      lastTouch.current = thisY;
    };

    window.addEventListener("wheel", wheelHandler);
    window.addEventListener("touchmove", touchHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("touchmove", touchHandler);
    };
  }, [listener, throttleAmount]);
};

export const useScrollThreshold = (
  listener: (x0: number) => any,
  threshold = 0.5,
  coolDown = 1000
): void => {
  const throttledListener = useRef<(val: number) => void>(
    throttle((val: number) => listener(val), coolDown)
  );
  const callback = useRef((val: number) => {
    if (val > threshold || val < -threshold) {
      throttledListener.current(val);
    }
  });

  useScroll(callback.current);
};

export default useScrollThreshold;
