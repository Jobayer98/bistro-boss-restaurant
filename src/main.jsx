import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
