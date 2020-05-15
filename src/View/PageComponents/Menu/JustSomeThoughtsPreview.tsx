import * as React from "react";
import useTypeWriter from "../../Hooks/useTypeWriter/useTypeWriter";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
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
  return <Container className="withTypingIndicator">{text}</Container>;
};

export default JustSomeThoughtsPreview;
