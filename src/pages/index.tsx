import * as React from "react";
import Layout from "../View/Layout/Layout";
import SEO from "../View/Utility/seo";
import Lorenz from "../View/PageComponents/Homepage/Lorenz";
import HallwayPreview from "../View/PageComponents/Menu/HallwayPreview";
import PerspectivePreview from "../View/PageComponents/Menu/PerspectivePreview";
import MetaSpherePreview from "../View/PageComponents/Menu/MetaSpherePreview";
import JustSomeThoughtsPreview from "../View/PageComponents/Menu/JustSomeThoughtsPreview";
import Card from "../Domain/Card/Card";
import CardMenu from "../View/PageComponents/Menu/CardMenu";
import { MenuRouteProps } from "../Domain/Menu/Menu";
import LiquorForDinnerPreview from "../View/PageComponents/Menu/LiquorForDinnerPreview";

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
        <em className="mute">(Almost)</em> Shamelessly{" "}
        <em className="mute">(basically)</em> stolen{" "}
        <em className="mute">(from a tutorial)</em>
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
  {
    background: LiquorForDinnerPreview,
    title: "Liquor For Dinner",
    description: null,
    link: "/liquorForDinner",
  },
];
// I can't find the typescript type for props passed into pages to save my life.
const Menu = (props: MenuRouteProps) => (
  <Layout>
    <SEO title="Menu" />
    <button onClick={() => breakEverything()}>Break Everything</button>
    {/* <CardMenu routeProps={props} cards={cards} /> */}
    <style jsx>
      {`
        .mute {
          font-weight: 200;
        }
      `}
    </style>
  </Layout>
);

export default React.memo(Menu, () => false);
