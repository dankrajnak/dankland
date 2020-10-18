// utils/analytics.js
import ReactGA, { EventArgs } from "react-ga";

// Janky, but will get the job done for now.
const hostNameFilter = "dank.land";
const atDankLand = (): boolean => window.location.hostname === hostNameFilter;

export default class GoogleAnalyticsService {
  static initGA(): void {
    if (atDankLand()) {
      ReactGA.initialize("UA-108070651-2");
    }
  }

  static logPageView(): void {
    if (atDankLand()) {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  }

  static logEvent(args: EventArgs): void {
    if (atDankLand()) {
      ReactGA.event(args);
    }
  }

  static logException(description = "", fatal = false): void {
    if (atDankLand()) {
      if (description) {
        ReactGA.exception({ description, fatal });
      }
    }
  }
}
