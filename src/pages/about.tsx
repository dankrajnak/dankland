import * as React from "react";
import styled from "styled-components";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 50%;
  line-height: 1.8rem;
`;

const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const greet = React.useRef<() => void>(() => {});

  React.useEffect(() => {
    import(`../webassembly/fluid/pkg`)
      .then((module) => {
        console.log("LOADED MODULE");
        greet.current = module.greet;
      })
      .catch(console.error);
  }, []);
  return (
    <MenuLayout color="black">
      <SEO title="About" />
      <Container>
        <Content>
          <h4>This is just stuff I like making.</h4>
          <p>
            My name's Daniel. This is a place that I put stuff I make. If you
            like my work, feel free to reach out. My email is the first three
            letters of my first name plus a '.' plus my last name (krajnak).
            It's the google kind. Suck on that, email-harvesting bots.
          </p>
          <button
            onClick={() => {
              console.log("click");
              greet.current();
            }}
          >
            I'm a web-assembly button!
          </button>
        </Content>
      </Container>
    </MenuLayout>
  );
};

export default About;
