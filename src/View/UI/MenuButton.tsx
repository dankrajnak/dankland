import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 500;
  opacity: ${(props) => (props.show ? 1 : 0.05)};
  transition: opacity 0.75s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
`;

interface ButtonProps {
  color?: string;
  fade?: boolean;
}

const Button = ({ color = "white", fade = false }: ButtonProps) => {
  const [showing, setShowing] = React.useState(true);

  React.useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => setShowing(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  return (
    <MenuContainer show={showing}>
      <Link href="/">
        <a className="menu-button">MENU</a>
      </Link>
      <style jsx>
        {`
          .menu-button {
            font-weight: 600;
            text-decoration: none;
          }
        `}
      </style>
      <style jsx>
        {`
          .menu-button {
            color: ${color};
          }
        `}
      </style>
    </MenuContainer>
  );
};

export default Button;
