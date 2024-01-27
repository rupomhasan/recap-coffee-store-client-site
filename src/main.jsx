import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyCreatedRoutes from "./Routes/MyCreatedRoutes";
import Authprovider from "./Auth/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={MyCreatedRoutes} />
    </Authprovider>
  </React.StrictMode>
);
