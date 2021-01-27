import Link from "next/link";

import { Menu } from "../../../../Domain/Menu/Menu";

const SimpleMenu: Menu = ({ cards }) => (
  <>
    <div className="cards-holder">
      {cards.map((card, index) => (
        <div className="card-holder">
          <Link href={card.link} key={index}>
            <a className="card-graphic">
              <card.background width={300} height={300} />
            </a>
          </Link>
        </div>
      ))}
    </div>

    <style jsx>{`
      .cards-holder {
        margin-top: 20px;
        justify-content: center;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }

      .card-holder {
        cursor: pointer;
        width: 300px;
        height: 300px;
        margin: 50px;
        box-shadow: 18px 18px 37px #21212a, -18px -18px 37px #2d2d38;
      }

      .card-graphic {
        display: block;
        width: 300px;
        height: 300px;
        overflow: hidden;
      }

      @media screen and (max-width: 900px) {
        .card-holder {
          width: 100% !important;
        }
      }

      .info-title {
        font-weight: 400;
        margin-bottom: 5px;
      }

      .card-info {
        font-weight: 100;
        color: white;
        display: none;
        flex-direction: column;
        width: 300px;
        height: 100px;
      }
    `}</style>
    <style jsx global>{`
      a.card-graphic {
        text-decoration: none !important;
      }
    `}</style>
  </>
);

export default SimpleMenu;
