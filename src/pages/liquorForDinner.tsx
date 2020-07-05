import * as React from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

const LiquorForDinner = () => (
  <MenuLayout>
    <SEO title="Liquor For Dinner" />
    <div className="container">
      <h2 className="content">Nothing's Here.</h2>
    </div>
    <style jsx>
      {`
        .container {
          position: fixed;
          background-color: black;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          color: white;
        }
      `}
    </style>
  </MenuLayout>
);

export default LiquorForDinner;
