import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import MasterLayout from "./pages/theme/masterLayout";
import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MasterLayout>
      <RouterCustom />
    </MasterLayout>
  </BrowserRouter>
);
