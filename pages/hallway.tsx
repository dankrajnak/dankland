import * as React from "react";
import useFullScreen from "../src/View/Hooks/useFullScreen";
import ThreeContainer from "../src/View/UI/ThreeContainer";
import { start, stop } from "../src/Services/Hallway/Hallway.service";
import MenuLayout from "../src/View/Layout/MenuLayout";
import SEO from "../src/View/Utility/seo";

const Hallway = () => {
  const [width, height, flash] = useFullScreen();
  if (flash) {
    return flash;
  }
  return (
    <MenuLayout>
      <SEO title="Hallway" />
      <ThreeContainer start={start} stop={stop} width={width} height={height} />
    </MenuLayout>
  );
};

export default Hallway;
