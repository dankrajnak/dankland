import * as React from "react";
import Head from "next/head";
import { Menu } from "../../../../Domain/Menu/Menu";
import TheCoolestOne from "../../Homepage/TheCoolestOne";
import Layout from "../../../Layout/Layout";

const NucleusMenu: Menu = ({ cards }) => {
  const [width, setWidth] = React.useState<number | null>(null);
  const [height, setHeight] = React.useState<number | null>(null);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <Layout>
      <div className="title-container">
        <h1>Dank Land</h1>
      </div>

      <div
        className="nucleus-container"
        style={{ opacity: width && height ? 100 : 0 }}
      >
        {width && height && <TheCoolestOne width={width} height={height} />}
      </div>
      {width &&
        height &&
        cards.map((card) => (
          <card.background width={width} height={height / 3} />
        ))}

      <style jsx>
        {`
          .title-container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }

          .nucleus-container {
            background: #000;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            transition: opacity 2s ease;
            z-index: -1;
          }
        `}
      </style>
    </Layout>
  );
};

export default NucleusMenu;
