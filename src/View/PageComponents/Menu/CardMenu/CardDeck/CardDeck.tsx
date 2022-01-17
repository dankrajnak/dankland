import { useLayoutEffect, useMemo } from "react";
import Link from "next/link";

import useScrollAmount from "../../../../Hooks/useScrollAmount";
import Card, { Props as CardProps } from "../Card/Card";
import { mappedStepEaser } from "../../../../../Services/EaseStep/EaseStep.service";
import EasingFunctions from "../../../../../Services/Ease/Ease.service";
import useSafeWindow from "../../../../Hooks/useSafeWindow";
import { useWindowSize } from "react-use";

interface Props {
  cards: ({
    link: string;
  } & Omit<CardProps, "width" | "height">)[];
  width: number;
  cardsWidth: number;
  cardsHeight: number;
  scrollToCard?: number | null;
}

const CardHolder = (props: {
  dx: number;
  dy: number;
  order: number;
  children: React.ReactNode;
}) => (
  <div
    style={{
      transform: `translate(${props.dx}px, ${props.dy}px)`,
      zIndex: 2000 - props.order,
      position: "fixed",
    }}
  >
    {props.children}
  </div>
);

const PERIOD = 0.4;
const EASING_FUNCTION = EasingFunctions.easeInOutQuart;

/**
 * Creates a scrollable Card Deck.
 * @param {Props} props
 */
const CardDeck = (props: Props) => {
  const scroll = useScrollAmount(true);
  const [window] = useSafeWindow();

  const { width: windowWidth, height: windowHeight } = useWindowSize();

  // This is the position on the screen the deck sits.  It's a computed value based on the windowWidth.
  const deckPosition = useMemo(
    () => (windowWidth - props.cardsWidth) / 2,
    [props.cardsWidth, windowWidth]
  );

  const scrollDemap = useMemo(
    () => (val: number) => deckPosition - windowWidth * val,
    [deckPosition, windowWidth]
  );

  const scrollLength = windowHeight * 5;
  const cardPositionStart = deckPosition;
  const cardPositionEnd = -props.cardsWidth;
  // Memoize stepEaser to only generate range and getPosition when the cards length changes.
  const [getPosition, getEaseStart] = useMemo(
    () =>
      mappedStepEaser(
        0,
        scrollLength,
        cardPositionStart,
        cardPositionEnd
      )(props.cards.length - 1, PERIOD, EASING_FUNCTION),
    [cardPositionEnd, cardPositionStart, props.cards.length, scrollLength]
  );

  // Move to the saved scroll position when this component renders
  useLayoutEffect(() => {
    let timeout: number;
    if (window) {
      if (props.scrollToCard) {
        //Ok, this is hacky, but unless we wait a few milliseconds,
        // the screen doesn't have time to render and we don't scroll anywhere.
        // As far as I can tell for now, there's no way to listen for when all the cards have been rendered
        setTimeout(() => {
          if (props.scrollToCard) {
            window.scrollTo(
              0,
              // Add a little to the index to give make sure the card on top has moved off of the card below
              // TODO this should take the easing function into account.
              getEaseStart(props.scrollToCard + 2 / props.cards.length)
            );
          }
        }, 15);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [getEaseStart, props.cards.length, props.scrollToCard, window]);

  return (
    <>
      <div className="card-deck-holder">
        {props.cards.map((card, i) => {
          // Only draw cards when the card above it has moved and it's on screen.
          const nextCardPosition =
            i !== props.cards.length - 1
              ? getPosition(scroll, i + 1)
              : cardPositionStart;
          const currentCardPosition = getPosition(scroll, i);
          const prevCardPosition =
            i !== 0 ? getPosition(scroll, i - 1) : cardPositionEnd;

          const shouldNotDrawCard =
            (currentCardPosition === nextCardPosition &&
              currentCardPosition !== deckPosition) ||
            prevCardPosition === cardPositionStart;

          return (
            <Link href={card.link} key={i} passHref>
              <a className="card-deck-card-link">
                <CardHolder
                  dx={
                    i === props.cards.length - 1
                      ? cardPositionStart
                      : currentCardPosition
                  }
                  dy={(windowHeight - props.cardsHeight) / 2}
                  order={i}
                >
                  {!shouldNotDrawCard && (
                    <Card
                      {...card}
                      width={props.cardsWidth}
                      height={props.cardsHeight}
                      shadowAmount={
                        i === props.cards.length - 1
                          ? 0
                          : scrollDemap(getPosition(scroll, i))
                      }
                    />
                  )}
                </CardHolder>
              </a>
            </Link>
          );
        })}
      </div>
      <style global jsx>{`
        .card-deck-holder {
          height: ${scrollLength + windowHeight}px;
          width: 100%;
        }
        .fixed {
          position: fixed;
        }
      `}</style>
    </>
  );
};
export default CardDeck;
