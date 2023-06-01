import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import AuthProvider from "./context/AuthContext/AuthProvider";
import router from "./routes/Routes";
import CartProvider from "./context/CartContext/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
