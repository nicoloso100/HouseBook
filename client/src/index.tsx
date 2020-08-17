import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./pages/Home";
import * as serviceWorker from "./serviceWorker";

import "assets/icons/nucleo/css/nucleo.css";
import "assets/icons/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
