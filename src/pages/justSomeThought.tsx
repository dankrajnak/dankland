import { useState, useRef, useEffect, ReactNode, useReducer } from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import Vector2d from "../Domain/Vector/Vector2d";
import Action from "../Domain/Action/Action";
import TypeBox from "../View/PageComponents/JustSomeThought/TypeBox";
import SEO from "../View/Utility/seo";
import { useWindowSize } from "react-use";
import Div100vh from "react-div-100vh";

const TheThoughts: string[] = [
  "It still comes back to you",
  "Alone and being here, not new",
  "Still want runaway rules and nothing to pursue",
  "Still want that all talk and just do",
  "I wanna be like shoes, slip me on and just groove",
  "Forget those nights that include you",
  "Can't listen to that song we used to",
  "Jump in, swirl around, just move",
  "I keep trying to improve",
  "I'm just trying to conclude something I can pack up and move to",
  "Get out of that place you just blew through",
  "Prove to myself I can move too",
  "Or find myself on that middle-aged accrue",
  "Find something on view I can booze to",
  "Find some friends, just a few",
  "Find a guy almost like you",
  "Watch me get up and make something new",
  "Watch me never worry about seeing you",
];

interface State {
  maxElements: number;
  numElementsBeforeWhite: number;
  elements: { key: number; component: ReactNode }[];
  nextKey: number;
  timeOut: number;
}

type AddElementAction = Action<
  "ADD_ELEMENT",
  { key: number; component: ReactNode }
>;
type RemoveElementAction = Action<"REMOVE_ELEMENT", number>;
type SetTimeoutAction = Action<"SET_TIMEOUT", number>;
type NudgeMaxElements = Action<"NUDGE_MAX_ELEMENTS", number>;

const reducer = (
  state: State,
  action:
    | AddElementAction
    | RemoveElementAction
    | SetTimeoutAction
    | NudgeMaxElements
): State => {
  switch (action.type) {
    case "ADD_ELEMENT":
      // Don't add another element if we're at max, or if this element is already included
      if (
        state.elements.length >= state.maxElements ||
        state.nextKey > state.numElementsBeforeWhite
      ) {
        return state;
      }
      if (state.elements.find((elm) => elm.key === action.payload.key)) {
        throw new Error(`Element with key ${action.payload.key} already added`);
      }
      return {
        ...state,
        elements: state.elements.concat([action.payload]),
        nextKey: state.nextKey + 1,
      };
    case "REMOVE_ELEMENT":
      return {
        ...state,
        elements: state.elements.filter((elm) => elm.key !== action.payload),
      };
    case "SET_TIMEOUT":
      if (action.payload < 0) {
        throw new Error(
          `Tried to set timeout to value less than 0 -- ${action.payload}`
        );
      }
      return {
        ...state,
        timeOut: action.payload,
      };
    case "NUDGE_MAX_ELEMENTS":
      return {
        ...state,
        maxElements: Math.max(0, state.maxElements + action.payload),
      };
    default:
      return state;
  }
};

const JustSomeThoughts = () => {
  const [state, dispatch] = useReducer(reducer, {
    maxElements: 1,
    numElementsBeforeWhite: 100,
    elements: [],
    nextKey: 0,
    timeOut: 2000,
  });
  const { width, height } = useWindowSize();
  const maxElementsTimeout = useRef(20);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [menuColor, setMenuColor] = useState("black");
  useEffect(() => {
    const timeout = setTimeout(() => setMenuColor("white"), 70000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => setBackgroundColor("black"), 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    //Periodically increase max elements.
    const interval = setInterval(() => {
      dispatch({
        type: "NUDGE_MAX_ELEMENTS",
        payload: 1,
      });
      maxElementsTimeout.current = Math.max(10, maxElementsTimeout.current - 2);
    }, maxElementsTimeout.current * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.nextKey > state.numElementsBeforeWhite) {
      return;
    }
    const timeout = setTimeout(() => {
      const minTextWidth = 200;
      const textWidth =
        minTextWidth + Math.random() * Math.min(500, width - minTextWidth);
      const position = new Vector2d(
        Math.random() * (width - textWidth),
        Math.random() * height - 20
      );
      const textToType = TheThoughts[state.nextKey % TheThoughts.length];

      dispatch({
        type: "ADD_ELEMENT",
        payload: {
          key: state.nextKey,
          component: (
            <TypeBox
              key={state.nextKey}
              textToType={textToType}
              width={textWidth}
              pos={position}
              color={`rgba(0,0,0, ${Math.max(
                0,
                1 - state.nextKey / state.numElementsBeforeWhite
              )})`}
              unType
              onFinish={() =>
                dispatch({ type: "REMOVE_ELEMENT", payload: state.nextKey })
              }
            />
          ),
        },
      });
    }, state.timeOut);
    return () => {
      clearTimeout(timeout);
    };
  }, [
    height,
    state.elements,
    state.maxElements,
    state.nextKey,
    state.numElementsBeforeWhite,
    state.timeOut,
    width,
  ]);

  return (
    <MenuLayout
      color={menuColor}
      buttonStyles={`
        transition: color 60s ease
      `}
    >
      <SEO
        title="Just Some Thought"
        keywords={["poetry", "new media", "thought"]}
      />
      <Div100vh>{state.elements.map((elm) => elm.component)}</Div100vh>
      <style jsx global>
        {`
          body {
            transition: background-color 85s ease-in;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </MenuLayout>
  );
};

export default JustSomeThoughts;
