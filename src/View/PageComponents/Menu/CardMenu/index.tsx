import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useWindowSize } from "react-use";
import { Menu } from "../../../../Domain/Menu/Menu";
import useScrollAmount from "../../../Hooks/useScrollAmount";
import CardDeck from "./CardDeck/CardDeck";

/**
 * Pages are represented as cards on a deck. As the user scrolls the cards roll off the deck
 * offscreen.  Known to be a little buggy on iphones.
 */
const CardMenu: Menu = ({ cards }) => {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const cardWidth = useMemo(() => Math.min(500, width * 0.9), [width]);
  const cardHeight = useMemo(() => Math.min(500, height * 0.7), [height]);

  const cardsWithDimensions = useMemo(
    () =>
      cards.map((card) => ({
        ...card,
        background: <card.background width={cardWidth} height={cardHeight} />,
      })),
    [cardHeight, cardWidth, cards]
  );

  const scroll = useScrollAmount();

  return (
    <>
      <div className="aboutContainer">
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
      </div>
      <CardDeck
        cards={cardsWithDimensions}
        width={width}
        cardsWidth={cardWidth}
        cardsHeight={cardHeight}
      />

      <div className="scrollMessage">Scroll Down</div>
      <style jsx>
        {`
          .aboutContainer {
            position: fixed;
            top: 8%;
            left: 8%;
            width: 100%;
          }
          .aboutContainer a {
            text-decoration: none;
            color: #222;
          }
          .aboutContainer a:hover {
            border-bottom: solid 1px #222;
          }
          .scrollMessage {
            position: fixed;
            bottom: 20px;
            width: 100%;
            text-align: center;
            font-size: small;
            color: #aaa;
            z-index: 5000;
          }
        `}
      </style>
      <style jsx>{`
        .scrollMessage {
          opacity: ${(1 - scroll / height) * 2 || 0};
        }
      `}</style>
    </>
  );
};

export default CardMenu;
