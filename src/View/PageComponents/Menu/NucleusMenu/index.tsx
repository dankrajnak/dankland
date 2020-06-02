import * as React from "react";
import Link from "next/link";
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
      <div className="card-container">
        {cards.map((card, index) => (
          <div>
            <Link href={card.link} key={index}>
              <a>
                <card.background width={300} height={500} />
              </a>
            </Link>
            <h1>{card.title}</h1>
            <div>{card.description}</div>
          </div>
        ))}
      </div>

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

          .card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-direction: column;
          }

          .card-container > div {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </Layout>
  );
};

export default NucleusMenu;
