import { Outlet } from "react-router-dom";
import NavBar from "./Header/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
