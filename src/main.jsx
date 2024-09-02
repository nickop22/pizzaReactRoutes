import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //app
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
