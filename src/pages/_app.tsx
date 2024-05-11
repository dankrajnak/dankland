import { FunctionComponent } from "react";
import { AppProps, NextWebVitalsMetric, AppContext } from "next/app";
import Bugsnag from "../Services/Bugsnag/Bugsnag.service";
import "../View/Styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ErrorBoundary = Bugsnag.getPlugin("react") as any;

export async function getInitialProps({ Component, ctx }: AppContext) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary FallbackComponent={Error}>
    <SpeedInsights />
    <Component {...pageProps} />
  </ErrorBoundary>
);

export default App;
