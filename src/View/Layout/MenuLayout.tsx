import * as React from "react";
import MenuButton, { PossibleMenuColors } from "../UI/MenuButton";
import Layout from "./Layout";
import globalStyles from "../Styles/global";

interface Props {
  color?: PossibleMenuColors;
  children: React.ReactNode;
}

const MenuLayout = ({ color = "white", children }: Props) => (
  <Layout>
    <MenuButton color={color} />
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </Layout>
);

export default MenuLayout;
