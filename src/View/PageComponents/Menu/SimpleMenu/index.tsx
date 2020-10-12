import * as React from "react";
import Link from "next/link";

import { Menu } from "../../../../Domain/Menu/Menu";

const SimpleMenu: Menu = ({ cards }) => (
  <>
    <div className="cards-holder">
      {cards.map((card) => (
        <Link href={card.link}>
          <div className="card-holder">
            <div className="card-graphic">
              <card.background width={300} height={300} />
            </div>
            <div className="card-info">
              <h2 className="info-title">{card.title}</h2>
              <div className="info-description">{card.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <style jsx>{`
      .card-holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 33%;
        height: 500px;
      }
      @media screen and (max-width: 900px) {
        .card-holder {
          width: 100% !important;
        }
      }
      .card-graphic {
        width: 300px;
        height: 300px;
        border-radius: 5px;
        overflow: hidden;
      }
      .info-title {
        font-weight: 100;
      }
      .card-info {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100px;
      }

      .cards-holder {
        background-color: white;
        cursor: pointer;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }
    `}</style>
  </>
);

export default SimpleMenu;
