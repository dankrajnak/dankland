import { FunctionComponent } from "react";
import { AppProps, NextWebVitalsMetric, AppContext } from "next/app";
import Bugsnag from "../Services/Bugsnag/Bugsnag.service";
import GoogleAnalyticsService from "../Services/GoogleAnalytics/GoogleAnalytics.service";

const ErrorBoundary = Bugsnag.getPlugin("react") as any;

export async function getInitialProps({ Component, ctx }: AppContext) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  GoogleAnalyticsService.logEvent({
    action: name,
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary FallbackComponent={Error}>
    <Component {...pageProps} />
  </ErrorBoundary>
);

export default App;
