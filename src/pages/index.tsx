import {
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import { Check, Pen, X } from "react-bootstrap-icons";
import SimpleMenu from "../View/PageComponents/Menu/SimpleMenu";
import Layout from "../View/Layout/Layout";
import SEO from "../View/Utility/seo";
import Card from "../Domain/Card/Card";
import { MenuRouteProps } from "../Domain/Menu/Menu";
import useFullScreen from "../View/Hooks/useFullScreen";

import useScrollAmount from "../View/Hooks/useScrollAmount";
import useRequest from "../Hooks/useRequest";
import TitleService from "../Services/Title/Title.service";
import { Either, failure, success } from "../Utils/Either";

const LinkLoading = () => (
  <>
    <div />
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}</style>
  </>
);

// Dynamically import all the cards to reduce initial load.
const Lorenz = dynamic(() => import("../View/PageComponents/Homepage/Lorenz"), {
  loading: () => <LinkLoading />,
});
const PerspectivePreview = dynamic(
  () => import("../View/PageComponents/Menu/PerspectivePreview"),
  { loading: () => <LinkLoading /> }
);
const HallwayPreview = dynamic(
  () => import("../View/PageComponents/Menu/HallwayPreview"),
  { loading: () => <LinkLoading /> }
);
const MetaSpherePreview = dynamic(
  () => import("../View/PageComponents/Menu/MetaSpherePreview"),
  { loading: () => <LinkLoading /> }
);
const JustSomeThoughtsPreview = dynamic(
  () => import("../View/PageComponents/Menu/JustSomeThoughtsPreview"),
  { loading: () => <LinkLoading /> }
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
];

const Fluid = dynamic(() => import("../View/UI/Fluid"));

const INVALID_RED = "#FF6466";
const BACKGROUND_COLOR = "#272731";

const validateTitle = (
  title: string | null | undefined
): Either<string, string> => {
  const trimmedTitle = title?.trim();
  if (!trimmedTitle) {
    return failure("Title cannot be empty");
  }

  if (trimmedTitle.length > 250) {
    return failure(
      "Title cannot be over 250 characters.  It doesn't look good otherwise :/"
    );
  }
  return success(trimmedTitle);
};

const Title = ({
  initialTitle,
  showLoader,
}: {
  initialTitle: string;
  showLoader: boolean;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTitleState, updateTitle] = useRequest(TitleService.setTitle, {
    initialData: initialTitle,
  });
  const [validationError, setValidationError] = useState<string | null>(null);
  const inputRef = useRef() as RefObject<HTMLTextAreaElement>;

  useLayoutEffect(() => {
    if (isEditing) {
      inputRef.current?.select();
      inputRef.current?.focus();
    }
  }, [isEditing]);

  if (showLoader || updateTitleState.isLoading) {
    return <BarLoader color="white" height={2} />;
  }

  return (
    <>
      <div className="edit">
        <div className="text-holder">
          <textarea
            onChange={() => setValidationError(null)}
            ref={inputRef}
            className={validationError ? "error" : ""}
            rows={2}
            defaultValue={updateTitleState.data!}
          />
          {validationError && (
            <div className="error-message">{validationError}</div>
          )}
        </div>
        <span className="edit-button-holder">
          <button
            style={{ marginRight: 5 }}
            onClick={() => {
              const validResult = validateTitle(inputRef.current?.value);
              validResult.whenSuccess((title) => {
                setValidationError(null);
                updateTitle(title).then(() => {
                  setIsEditing(false);
                });
              });
              validResult.whenFailure((errorMessage) => {
                setValidationError(errorMessage);
                inputRef.current?.select();
                inputRef.current?.focus();
              });
            }}
          >
            <Check size="1.75rem" />
          </button>
          <button>
            <X
              size="1.75rem"
              onClick={() => {
                setIsEditing(false);
                if (inputRef.current) {
                  inputRef.current.value = updateTitleState.data ?? "";
                }
                setValidationError(null);
              }}
            />
          </button>
        </span>
      </div>

      <h1 className="no-edit">
        {updateTitleState.data}
        <sup>
          <button
            className="simple-button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <Pen size=".8rem" />
          </button>
        </sup>
      </h1>

      <style jsx>{`
        h1,
        textarea {
          font-weight: 100;
          font-size: 2rem;
        }
        h1 {
          text-align: center;
        }
        textarea {
          background-color: ${BACKGROUND_COLOR} !important;
          color: inherit;
          resize: none;
          flex-grow: 1;

          border: none;
          background-color: transparent;
          box-shadow: none;
        }

        textarea.error {
          outline: none;
          border: solid 1px ${INVALID_RED} !important;
          border-radius: 5px;
        }

        .error-message {
          margin-top: 3px;
          color: ${INVALID_RED};
          word-break: break-word;
        }

        .text-holder {
          width: 60vw;
          display: flex;
          flex-direction: column;
        }

        button {
          color: inherit;
          background: none !important;
          border: none !important;
          border-radius: 5px;
          transition: background 0.5s ease, color 0.5s ease;
        }

        button:hover {
          cursor: pointer;
        }

        .edit-button-holder button:hover {
          background-color: white !important;
          color: ${BACKGROUND_COLOR};
          cursor: pointer;
        }

        .edit-button-holder {
          display: flex;
          margin-top: 10px;
        }

        @media screen and (max-width: 600px) {
          .edit {
            width: 100%;
            margin-right: 10px;
            margin-left: 10px;
          }
          .text-holder {
            width: 90vw;
          }
        }
      `}</style>
      <style jsx>{`
        .no-edit {
          ${isEditing ? "display: none;" : ""}
          width: 60vw;
        }

        .edit {
          ${!isEditing ? "display: none;" : " display: flex;"}
          flex-grow: 1;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

// I can't find the typescript type for props passed into pages to save my life.
const Menu = (props: MenuRouteProps) => {
  const [width, height] = useFullScreen({ ignoreHeightUpdates: isMobile });
  const scroll = useScrollAmount();
  const [showLoader, setShowLoader] = useState(false);
  const hideLoader = useCallback(() => setShowLoader(false), []);

  return (
    <Layout>
      <SEO title="Menu" />
      <div className="fluid-holder">
        {width > 0 && height > 0 && (
          <Fluid width={width} height={height} onLoad={hideLoader} />
        )}
      </div>
      <div className="title-container">
        <div className="title-holder">
          <Title showLoader={showLoader} initialTitle={props.title} />
        </div>
        <div className="scroll-message">Scroll</div>
      </div>

      <SimpleMenu routeProps={props} cards={cards} />
      <div className="about-holder">
        <Link href="/about">
          <a>About</a>
        </Link>
        <span>Created by Daniel Krajnak</span>
      </div>

      <style jsx>
        {`
          .title-container {
            width: 100%;
            height: ${"100vh"};
          }

          .title-holder {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;

            z-index: 1000;
            color: white;
            font-weight: 200;
          }

          .fluid-holder {
            width: ${width}px;
            height: ${height}px;
            position: absolute;
            top: 0;
          }

          .about-holder {
            padding: 20px 30px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white !important;
          }
          .about-holder span {
            font-weight: lighter;
          }
          .about-holder a {
            margin-right: 7px;
            color: white !important;
            text-decoration: none;
          }

          .scroll-message {
            width: 100%;
            text-align: center;
            bottom: 25px;
            z-index: 1000;
            position: absolute;
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
            background-color: ${BACKGROUND_COLOR};
          }
        `}
      </style>
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: { title: await TitleService.getTitle() },
  revalidate: 1,
});
export default Menu;
