import { Outlet } from "react-router-dom";

import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
