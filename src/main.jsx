import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { NextUIProvider } from "@nextui-org/system";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);
