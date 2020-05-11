import * as React from "react";
import Vector2d from "../../../Domain/Vector/Vector2d";
import useTypeWriter, {
  SetText,
} from "../../Hooks/useTypeWriter/useTypeWriter";
import TypeBoxContainer from "./TypeBoxContainer";

interface TypeBoxProps {
  textToType: string;
  width: number;
  pos: Vector2d;
  color?: string;
  unType?: boolean;
  onFinish?: (setText: SetText) => void;
}

const TypeBox = ({
  textToType,
  width,
  pos,
  unType,
  color,
  onFinish,
}: TypeBoxProps) => {
  const [text, setText] = useTypeWriter();
  React.useEffect(() => {
    let timeout: number;
    setText(textToType, {
      listener: () => {
        timeout = setTimeout(() => {
          if (unType) {
            setText("", {
              listener: () => onFinish && onFinish(setText),
            });
          }
        }, 2000);
      },
    });
    return () => {
      clearTimeout(timeout);
    };
  }, [onFinish, setText, textToType, unType]);

  return text.length ? (
    <>
      <TypeBoxContainer
        pos={pos}
        width={width}
        color={color}
        className="withTypingIndicator"
      >
        {text}
      </TypeBoxContainer>
      <style jsx>
        {`
          .withTypingIndicator:after {
            content: "|";
            font-weight: 400;
            animation: blink 500ms ease-in-out infinite alternate;
          }
          @keyframes blink {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  ) : (
    <div />
  );
};

export default TypeBox;
