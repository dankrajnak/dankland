import { useState, useCallback } from "react";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import Layout from "../View/Layout/Layout";
import SEO from "../View/Utility/seo";
import Card from "../Domain/Card/Card";
import { MenuRouteProps } from "../Domain/Menu/Menu";
import LiquorForDinnerPreview from "../View/PageComponents/Menu/LiquorForDinnerPreview";
import useFullScreen from "../View/Hooks/useFullScreen";
import SimpleMenu from "../View/PageComponents/Menu/SimpleMenu";
import useScrollAmount from "../View/Hooks/useScrollAmount";

// Dynamically import all the cards to reduce initial load.
const Lorenz = dynamic(() => import("../View/PageComponents/Homepage/Lorenz"));
const PerspectivePreview = dynamic(
  () => import("../View/PageComponents/Menu/PerspectivePreview")
);
const HallwayPreview = dynamic(
  () => import("../View/PageComponents/Menu/HallwayPreview")
);
const MetaSpherePreview = dynamic(
  () => import("../View/PageComponents/Menu/MetaSpherePreview")
);
const JustSomeThoughtsPreview = dynamic(
  () => import("../View/PageComponents/Menu/JustSomeThoughtsPreview")
);

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

const Fluid = dynamic(() => import("../View/UI/Fluid"));

// I can't find the typescript type for props passed into pages to save my life.
const Menu = (props: MenuRouteProps) => {
  const [width, height] = useFullScreen({ ignoreHeightUpdates: isMobile });
  const scroll = useScrollAmount();

  const [showLoader, setShowLoader] = useState(true);
  const hideLoader = useCallback(() => setShowLoader(false), []);

  return (
    <Layout>
      <SEO title="Menu" />

      <div className="title-container">
        <div className="title-holder">
          <h1>
            {showLoader ? (
              <BarLoader color="white" height={2} loading={showLoader} />
            ) : (
              "Dank Land"
            )}
          </h1>
        </div>
        <div className="scroll-message">Scroll</div>
        <div className="about-holder">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
      <div className="fluid-holder">
        {width > 0 && height > 0 && (
          <Fluid width={width} height={height} onLoad={hideLoader} />
        )}
      </div>
      <SimpleMenu routeProps={props} cards={cards} />
      <style jsx>
        {`
          .title-container {
            width: 100%;
            height: ${height > 0 ? `${height}px` : "100vh"};
          }

          .title-holder {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1000;
            color: #ffffff;
            font-weight: 200;
            transform: translate(-50%, -50%);
          }
          .title-holder h1 {
            font-weight: 100;
          }

          .fluid-holder {
            width: ${width}px;
            height: ${height}px;
            position: absolute;
            top: 0;
          }

          .about-holder {
            position: absolute;
            z-index: 1000;

            font-weight: 100;
            top: 20px;
            left: 20px;
          }
          .about-holder a {
            color: white !important;
            text-decoration: none;
          }

          .scroll-message {
            left: 50%;
            bottom: 25px;
            z-index: 1000;
            position: absolute;
            transform: translate(-50%, -50%);
            opacity: ${scroll > 0 ? 0 : 0.5};
            transition: opacity ease 1s;
            color: white;
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body {
            width: 100%;
            overflow-x: hidden;
            background-color: #272731;
          }
        `}
      </style>
    </Layout>
  );
};

export default Menu;
