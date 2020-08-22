import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";

import "assets/icons/nucleo/css/nucleo.css";
import "assets/icons/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Login from "pages/Login";

const redirectMainPath = () => <Redirect to="/home" />;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={redirectMainPath} />
        <Route exact path="/home" render={Home} />
        <Route exact path="/login" render={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
