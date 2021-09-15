import useAsync from "@danielkrajnak/use-async";
import MenuLayout from "../View/Layout/MenuLayout";

const getTeapot = async (): Promise<Record<string, unknown>> => {
  const response = await fetch("/api/teapot");
  return {
    status: response.status,
    statusText: response.statusText,
    body: await response.json(),
  };
};

const Teapot = () => {
  const [state, makeCoffee] = useAsync(getTeapot);
  let text = "{}";
  if (state.isLoading) {
    text = "Loading ...";
  } else if (state.errorMessage) {
    text =
      typeof state.errorMessage === "string"
        ? state.errorMessage
        : "There was an error :(";
  } else if (state.data) {
    text = JSON.stringify(state.data, null, 2);
  }
  return (
    <MenuLayout>
      <div className="container">
        <button onClick={() => makeCoffee()}>Make coffee</button>
        <pre>{text}</pre>
      </div>
      <style jsx>
        {`
          .container {
            width: 50%;
            margin: 20px auto;
          }

          @media screen and (max-width: 600px) {
            .container {
              width: 90%;
            }
          }

          pre {
            overflow-x: auto;
            font-family: monospace;
            background-color: #efefef;
            padding: 5px;
            border: solid 1px #aaa;
            border-radius: 3px;
          }
        `}
      </style>
    </MenuLayout>
  );
};

export default Teapot;
