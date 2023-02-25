import Link from "next/link";
import { useEffect, useState } from "react";

interface ButtonProps {
  color?: string;
  fade?: boolean;
  styles?: string;
}

const Button = ({
  color = "white",
  fade = false,
  styles = "",
}: ButtonProps) => {
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => setShowing(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  return (
    <div className="menu-container">
      <Link href="/" legacyBehavior>
        <a className="menu-button">MENU</a>
      </Link>
      <style jsx>
        {`
          .menu-button {
            font-weight: 600;
            text-decoration: none;
          }
          .menu-button:visited {
            color: inherit;
          }
          .menu-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 500;
            transition: opacity 0.75s ease-in-out;
          }
          .menu-container:hover {
            opacity: 1 !important;
          }
        `}
      </style>
      <style jsx>
        {`
          .menu-button {
            color: ${color} !important;
            ${styles}
          }
          .menu-button-container {
            opacity: ${showing ? 1 : 0.05};
          }
        `}
      </style>
    </div>
  );
};

export default Button;
