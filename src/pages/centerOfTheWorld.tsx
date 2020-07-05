import * as React from "react";
import { useRouter } from "next/router";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";
import LocalStorageService from "../Services/LocalStorage/LocalStorage.service";

const CenterOfTheWorld = () => {
  const liquorPage = React.useState(LocalStorageService.getLiquorPage())[0];
  const router = useRouter();
  React.useEffect(() => {
    if (liquorPage === "middle") {
      LocalStorageService.toggleLiquorPage();
    } else {
      router.push("/liquorForDinner");
    }
  }, [liquorPage, router]);

  return (
    <MenuLayout>
      <SEO title="Center Of the World" />
      <div className="container">
        <h2 className="content">Center Of The World</h2>
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
};

export default CenterOfTheWorld;
