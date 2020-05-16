import * as React from "react";
import MenuButton from "../UI/MenuButton";
import Layout from "./Layout";
import globalStyles from "../Styles/global";

interface Props {
  color?: string;
  buttonStyles?: string;
  children: React.ReactNode;
}

const MenuLayout = ({ color = "white", buttonStyles, children }: Props) => (
  <Layout>
    <MenuButton color={color} styles={buttonStyles} />
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </Layout>
);

export default MenuLayout;
