import * as React from "react";
import { SpringSystem, Spring } from "rebound";
import throttle from "../../Services/Throttle/Throttle.service";
import Vector2d from "../../Domain/Vector/Vector2d";

const getCoordinatesFromMouseEvent = (event: React.MouseEvent): Vector2d => {
  const bounds = event.currentTarget.getBoundingClientRect();
  return new Vector2d(event.clientX - bounds.left, event.clientY - bounds.top);
};

const randomPosition = (maxX: number, maxY: number): Vector2d =>
  new Vector2d(Math.random() * maxX, Math.random() * maxY);

const positionThreshold = 20;
const getNextPosition = (
  currentPosition: Vector2d,
  width: number,
  height: number
) => {
  let newPosition = randomPosition(width, height);
  while (newPosition.minus(currentPosition).magnitude < positionThreshold) {
    newPosition = randomPosition(width, height);
  }
  return newPosition;
};

const useClickHoverWander = (
  width: number,
  height: number,
  initialFocusPoint: Vector2d = new Vector2d(0, 0)
): [
  Vector2d,
  {
    onClick: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
  }
] => {
  const xSpring = React.useRef<Spring | null>(null);
  const ySpring = React.useRef<Spring | null>(null);
  const [focusPoint, setFocusPoint] = React.useState<Vector2d>(
    initialFocusPoint
  );

  React.useEffect(() => {
    const springSystem = new SpringSystem();
    const springTension = 2;
    const springFriction = 5;
    xSpring.current = springSystem.createSpring(springTension, springFriction);
    ySpring.current = springSystem.createSpring(springTension, springFriction);

    const goToNextPosition = () => {
      if (!xSpring.current || !ySpring.current) {
        return;
      }
      const newPosition = getNextPosition(
        new Vector2d(
          xSpring.current.getCurrentValue(),
          ySpring.current.getCurrentValue()
        ),
        width,
        height
      );
      // Not sure exactly why, but there's a bug if we set the endValue right away
      // Somtimes the spring just doesn't move.
      setTimeout(() => {
        if (xSpring.current && ySpring.current) {
          xSpring.current.setEndValue(newPosition.x);
          ySpring.current.setEndValue(newPosition.y);
        }
      }, 0);
    };

    xSpring.current.addListener({
      onSpringUpdate: spring => {
        if (!ySpring.current) {
          return;
        }
        setFocusPoint(
          new Vector2d(
            spring.getCurrentValue(),
            ySpring.current.getCurrentValue()
          )
        );
      },
      onSpringAtRest: () => {
        if (ySpring.current && ySpring.current.isAtRest()) {
          goToNextPosition();
        }
      },
    });
    ySpring.current.addListener({
      onSpringUpdate: spring => {
        if (!xSpring.current) {
          return;
        }
        if (xSpring.current.isAtRest()) {
          setFocusPoint(
            new Vector2d(
              xSpring.current.getCurrentValue(),
              spring.getCurrentValue()
            )
          );
        }
      },
      onSpringAtRest: () => {
        if (xSpring.current && xSpring.current.isAtRest()) {
          goToNextPosition();
        }
      },
    });

    xSpring.current.setEndValue(Math.random() * width);
    ySpring.current.setEndValue(Math.random() * height);

    return () => {
      xSpring.current && xSpring.current.destroy();
      ySpring.current && ySpring.current.destroy();
    };
  }, [height, width]);

  const onMouseMove = React.useMemo(
    () =>
      throttle((event: React.MouseEvent) => {
        const position = getCoordinatesFromMouseEvent(event);
        xSpring.current && xSpring.current.setEndValue(position.x);
        ySpring.current && ySpring.current.setEndValue(position.y);
      }, 100),
    []
  );

  const onClick = React.useMemo(
    () => (event: React.MouseEvent) => {
      const position = getCoordinatesFromMouseEvent(event);
      xSpring.current && xSpring.current.setEndValue(position.x);
      ySpring.current && ySpring.current.setEndValue(position.y);
    },
    []
  );

  return [
    focusPoint,
    {
      onClick,
      onMouseMove,
    },
  ];
};

export default useClickHoverWander;
