import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import PrivateRoute from "./PrivateRoute";
import OurShop from "../pages/OurShop/OurShop";
import ContactUs from "../pages/ContactUs/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop",
        element: (
          <PrivateRoute>
            <OurShop />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default router;
