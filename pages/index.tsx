import * as React from "react";
import styled from "styled-components";
import Layout from "../src/View/Layout/Layout";
import SEO from "../src/View/Utility/seo";
import Lorenz from "../src/View/PageComponents/Homepage/Lorenz";
import HallwayPreview from "../src/View/PageComponents/Menu/HallwayPreview";
import PerspectivePreview from "../src/View/PageComponents/Menu/PerspectivePreview";
import MetaSpherePreview from "../src/View/PageComponents/Menu/MetaSpherePreview";
import JustSomeThoughtsPreview from "../src/View/PageComponents/Menu/JustSomeThoughtsPreview";
import Card from "../src/Domain/Card/Card";
import CardMenu from "../src/View/PageComponents/Menu/CardMenu";
import { MenuRouteProps } from "../src/Domain/Menu/Menu";

const Mute = styled.em`
  font-weight: 200;
`;

const cards: Card[] = [
  {
    background: ({ width, height }) => (
      <Lorenz width={width} height={height} colorful />
    ),
    title: "Again",
    description: "Just to impress you",
    link: "/again",
  },
  {
    background: PerspectivePreview,
    title: "Perspective",
    description: "I spent two fucking days making a square move",
    link: "/perspective",
  },
  {
    background: HallwayPreview,
    title: "Hallway",
    description: (
      <div>
        <Mute>(Almost)</Mute> Shamelessly <Mute>(basically)</Mute> stolen{" "}
        <Mute>(from a tutorial)</Mute>
      </div>
    ),
    link: "/hallway",
  },
  {
    background: MetaSpherePreview,
    title: "Meta sphere",
    description: "Just go have some fun, kid",
    link: "/metaSphere",
  },
  {
    background: JustSomeThoughtsPreview,
    title: "Just Some Thought",
    description: "I just, well, here you go",
    link: "/justSomeThought",
  },
];
// I can't find the typescript type for props passed into pages to save my life.
const Menu = (props: MenuRouteProps) => (
  <Layout>
    <SEO title="Menu" />
    <CardMenu routeProps={props} cards={cards} />
  </Layout>
);

export default React.memo(Menu, () => false);
