import { ReactNode, useState } from "react";
import throttle from "@danielkrajnak/throttle";
import useScrollThreshold from "@danielkrajnak/use-scroll-threshold";
import SEO from "../View/Utility/seo";
import TheCoolestOne from "../View/PageComponents/Homepage/TheCoolestOne";
import MenuLayout from "../View/Layout/MenuLayout";
import Lorenz, { LORENZ_BLACK } from "../View/PageComponents/Homepage/Lorenz";
import useWindowEvent from "../View/Hooks/useWindowEvent";
import { useWindowSize } from "react-use";

const Title = (props: { color?: string; children: ReactNode }) => (
  <>
    <h1 style={{ color: props.color || "#2f3030" }}>{props.children}</h1>
    <style jsx>
      {`
        h1 {
          font-size: 2em;
          font-weight: 500;
          text-align: center;
        }
      `}
    </style>
  </>
);

const Fader = (props: { visible: boolean; children: ReactNode }) => (
  <>
    <div className="fader" style={{ opacity: props.visible ? 1 : 0 }}>
      {props.children}
    </div>
    <style jsx>
      {`
        .fader {
          position: fixed;
          height: 100%;
          top: 0;
          bottom: 0;
          transition: opacity 1s ease;
        }
      `}
    </style>
  </>
);

const NUM_PAGES = 3;

const IndexPage = (): ReactNode => {
  const { width, height } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(0);
  const incrementPage = () =>
    setCurrentPage((page) => Math.min(page + 1, NUM_PAGES - 1));
  const decrementPage = () => setCurrentPage((page) => Math.max(page - 1, 0));

  useScrollThreshold((val) => {
    if (val > 0) {
      incrementPage();
    } else {
      decrementPage();
    }
  });
  useWindowEvent(
    "keydown",
    throttle((e: KeyboardEvent) => {
      // Up arrow
      if (e.keyCode === 38) {
        decrementPage();
      }
      // Down arrow
      else if (e.keyCode === 40) {
        incrementPage();
      }
    }, 100)
  );
  return (
    <MenuLayout color={currentPage === 0 ? "white" : "black"}>
      <SEO title="Home" color={LORENZ_BLACK} />
      {currentPage === 0 && (
        <Fader visible={currentPage === 0}>
          <div className="title-holder">
            <Title color="#EEE">Again, again, again</Title>
          </div>
          <Lorenz width={width} height={height} />
        </Fader>
      )}
      <Fader visible={currentPage === 1}>
        <div className="title-holder">
          <Title> again, again again</Title>
        </div>
        <TheCoolestOne width={width} height={height} />
      </Fader>
      <Fader visible={currentPage === 2}>
        <div className="title-holder">
          <Title>agin again agian</Title>
        </div>
      </Fader>
      <style jsx>{`
        .title-holder {
          position: fixed;
          z-index: 0;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </MenuLayout>
  );
};

export default IndexPage;
