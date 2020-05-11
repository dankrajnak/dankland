import * as React from "react";
import Vector2d from "../../../Domain/Vector/Vector2d";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  pos: Vector2d;
  width: number;
  color?: string;
  children: React.ReactNode;
}

const TypeBoxContainer = ({
  pos,
  width,
  color,
  children,
  ...otherProps
}: Props) => (
  <div
    {...otherProps}
    className={`typeBoxContainer ${otherProps.className || ""}`}
  >
    {children}
    <style jsx>{`
      .typeBoxContainer {
        font-size: 1rem;
        position: absolute;
      }
    `}</style>
    <style jsx>{`
      .typeBoxContainer {
        width: ${width}px;
        top: ${pos.y}px;
        left: ${pos.x}px;
        color: ${color || "black"};
      }
    `}</style>
  </div>
);

export default TypeBoxContainer;
