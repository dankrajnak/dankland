import MenuButton from "../UI/MenuButton";
import Layout from "./Layout";

interface Props {
  color?: string;
  buttonStyles?: string;
  children: React.ReactNode;
}

const MenuLayout = ({ color = "white", buttonStyles, children }: Props) => (
  <Layout>
    <MenuButton color={color} styles={buttonStyles} />
    {children}
  </Layout>
);

export default MenuLayout;
