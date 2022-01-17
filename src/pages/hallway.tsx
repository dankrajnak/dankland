import ThreeContainer from "../View/UI/ThreeContainer";
import { start, stop } from "../Services/Hallway/Hallway.service";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

const Hallway = () => {
  return (
    <MenuLayout>
      <SEO title="Hallway" />
      <ThreeContainer start={start} stop={stop} />
    </MenuLayout>
  );
};

export default Hallway;
