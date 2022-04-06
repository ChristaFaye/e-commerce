import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css";
import App from "./App";
// import Hooks from "./pages/Hooks";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Hooks /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
