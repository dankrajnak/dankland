import * as React from "react";
/**
 * Component to display for a fraction of a second
 * while the page is getting ready.
 */
const FlashScreen = () => (
  <>
    <div className="flash" />
    <style jsx>
      {`
        .flash {
          background-color: white;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </>
);

export default FlashScreen;
