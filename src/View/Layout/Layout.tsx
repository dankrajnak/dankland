import * as React from "react";
import globalStyles from "../Styles/global";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => (
  <div>
    {props.children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
