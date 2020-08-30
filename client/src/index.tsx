import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "pages/Login";
import Main from "pages/Main";
import RegisterUser from "pages/RegisterUser";

import "assets/icons/nucleo/css/nucleo.css";
import "assets/icons/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/scss/argon-dashboard-react.scss";
import "react-confirm-alert/src/react-confirm-alert.css";
import User from "pages/User";

const redirectMainPath = () => <Redirect to="/home" />;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" render={redirectMainPath} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/RegisterUser">
          <RegisterUser />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
