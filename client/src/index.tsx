import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "pages/Login";
import Main from "pages/Main";
import { Provider, useDispatch } from "react-redux";
import User from "pages/User";
import Register from "pages/Register";
import { createStore } from "redux";
import rootReducer from "states";
import { USER_STORAGE } from "constants/userConstants";
import { setUser } from "actions/Redux/userAction";

import "./assets/styles/index.css";
import "assets/icons/nucleo/css/nucleo.css";
import "assets/icons/font-awesome/css/font-awesome.min.css";
import "assets/styles/argon-dashboard-react.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const redirectMainPath = () => <Redirect to="/home" />;

const store = createStore(rootReducer);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const session = localStorage.getItem(USER_STORAGE);
    if (session !== null) {
      const user: IUserInformation = JSON.parse(session);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
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
        <Route exact path="/signin">
          <Register />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
