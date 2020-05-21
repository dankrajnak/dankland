import * as React from "react";
import useTypeWriter from "../../Hooks/useTypeWriter/useTypeWriter";

const title = "It's a caipirinhas and sad boy music night";
const JustSomeThoughtsPreview = () => {
  const [text, setText] = useTypeWriter("");
  React.useEffect(() => {
    const timeouts: number[] = [];
    const repeatTyping = () => {
      timeouts.push(
        setTimeout(() => {
          setText("", {
            listener: () => {
              timeouts.push(
                setTimeout(() => {
                  setText(title, { listener: repeatTyping });
                }, 2000)
              );
            },
          });
        }, 5000)
      );
    };
    setText(title, { listener: repeatTyping });
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [setText]);
  return (
    <>
      <div className="withTypingIndicator container">{text}</div>
      <style jsx>
        {`
          .container {
            background-color: white;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default JustSomeThoughtsPreview;
