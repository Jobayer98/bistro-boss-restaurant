import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import Root from "./layout/Root";
import HomePage from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import OurShop from "./pages/OurShop/OurShop";
import ContactUs from "./pages/ContactUs/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
