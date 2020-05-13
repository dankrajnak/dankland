// utils/analytics.js
import ReactGA from "react-ga";

// Janky, but will get the job done for now.
const hostNameFilter = "dank.land";
const atDankLand = (): boolean => window.location.hostname === hostNameFilter;

export default class GoogleAnalyticsService {
  static initGA() {
    if (atDankLand()) {
      ReactGA.initialize("UA-108070651-2");
    }
  }

  static logPageView() {
    if (atDankLand()) {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  }

  static logEvent(category = "", action = "") {
    if (atDankLand()) {
      if (category && action) {
        ReactGA.event({ category, action });
      }
    }
  }

  static logException(description = "", fatal = false) {
    if (atDankLand()) {
      if (description) {
        ReactGA.exception({ description, fatal });
      }
    }
  }
}
