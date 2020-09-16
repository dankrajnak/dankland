import * as React from "react";
import { AppProps } from "next/app";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.SENTRY_PUBLIC_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn: process.env.SENTRY_PUBLIC_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
