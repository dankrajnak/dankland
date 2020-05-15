import * as React from "react";
import MenuButton from "../UI/MenuButton";
import Layout from "./Layout";
import globalStyles from "../Styles/global";

interface Props {
  color?: string;
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
