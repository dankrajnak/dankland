import * as React from "react";
import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";
import LocalStorageService from "../Services/LocalStorage/LocalStorage.service";
import { useRouter } from "next/router";

const Index = () => {
  const [mess, setMess] = React.useState("ok");
  React.useEffect(() => {
    setTimeout(() => {
      setMess("something Else");
    }, 500);
  }, []);

  return (
    <div>
      Hi <Thing message={mess} />
    </div>
  );
};
const Thing = (props: { message: string }) => {
  const message = React.useMemo(() => props.message, []);
  return <div>{message}</div>;
};

const LiquorForDinner = () => {
  const liquorPage = React.useState(LocalStorageService.getLiquorPage())[0];
  const router = useRouter();
  React.useEffect(() => {
    if (liquorPage === "liquor") {
      LocalStorageService.toggleLiquorPage();
    } else {
      router.push("/centerOfTheWorld");
    }
  }, [liquorPage, router]);

  return (
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
};

export default LiquorForDinner;
