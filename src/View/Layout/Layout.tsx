import { useEffect } from "react";
import GoogleAnalyticsService from "../../Services/GoogleAnalytics/GoogleAnalytics.service";
import useSafeWindow from "../Hooks/useSafeWindow";

interface Props {
  children: React.ReactNode;
}
// This is kinda hacky.  There's a ga plugin that next is developing.  This will hold us over until then.
let gaInitialized = false;

const Layout = (props: Props) => {
  const [safeWindow] = useSafeWindow();
  useEffect(() => {
    if (safeWindow && !gaInitialized) {
      GoogleAnalyticsService.initGA();
      gaInitialized = true;
    }
    GoogleAnalyticsService.logPageView();
  }, [safeWindow]);

  return <div>{props.children}</div>;
};

export default Layout;
