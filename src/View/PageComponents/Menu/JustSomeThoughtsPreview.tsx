import { useEffect } from "react";
import useTypeWriter from "../../Hooks/useTypeWriter/useTypeWriter";

const title = "It's a caipirinhas and sad boy music night";
const JustSomeThoughtsPreview = () => {
  const [text, setText] = useTypeWriter("");
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
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
            padding: 5px;
            color: black;
            display: flex;
            text-align: center;
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
