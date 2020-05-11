import * as React from "react";
import globalStyles from "../Styles/global";
import SEOHead from "./SEOHead";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => (
  <div>
    <SEOHead />
    {props.children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
