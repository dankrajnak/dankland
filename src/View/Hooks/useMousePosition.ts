import { useEffect, useRef } from "react";
import throttle from "@danielkrajnak/throttle";

/**
 * Returns how far the window is currently scrolled in either the vertical
 * or horizontal direction.
 * @param {boolean} [vertical=true]
 */
const useMousePosition = (
  domElement: {
    current: EventTarget | undefined | null;
  },
  absolute = false
): (() => [number, number]) => {
  const mousePosition = useRef<[number, number]>([0, 0]);
  useEffect(() => {
    const element = domElement.current;
    // Type as any because MouseEvent doesn't extend Event.
    const throttledFunc: any = throttle(
      (e: MouseEvent) =>
        (mousePosition.current = absolute
          ? [e.clientX, e.clientY]
          : [e.offsetX, e.offsetY]),
      30
    );
    let mouseListener: any;
    if (element) {
      mouseListener = element.addEventListener("mousemove", throttledFunc);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", mouseListener);
      }
    };
  }, [absolute, domElement]);
  return () => [mousePosition.current[0], mousePosition.current[1]];
};

export default useMousePosition;
