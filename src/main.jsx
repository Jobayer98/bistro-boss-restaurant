import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import Root from "./layout/Root";
import HomePage from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import OurShop from "./pages/OurShop/OurShop";

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
        element: <OurShop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
