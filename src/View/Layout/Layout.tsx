import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => <div>{props.children}</div>;

export default Layout;
