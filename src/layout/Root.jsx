import { Outlet } from "react-router-dom";

import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
