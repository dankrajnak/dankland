import MenuLayout from "../View/Layout/MenuLayout";

const getTeapot = async () => {
  try {
    const response = await fetch("/api/teapot");
    return response.json();
  } catch (e) {
    return e;
  }
};

const Teapot = () => (
  <MenuLayout>
    <button onClick={() => getTeapot()}>Make coffee</button>
  </MenuLayout>
);

export default Teapot;
