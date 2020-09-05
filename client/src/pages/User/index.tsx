import * as React from "react";
import UserSidebar from "components/molecules/UserSidebar/Sidebar";
import UserNavbar from "components/molecules/UserNavbar";
import { Route, Switch } from "react-router-dom";
import MyPosts from "./MyPosts";

const User: React.FC = () => {
  return (
    <>
      <UserSidebar />
      <div className="main-content">
        <UserNavbar />
        <Switch>
          <Route exact path="/user/index">
            <MyPosts />
          </Route>
          <Route path="/user/create">
            <h3>Please select a topic. 1</h3>
          </Route>
          <Route path="/user/edit">
            <h3>Please select a topic 2.</h3>
          </Route>
          <Route path="/user/delete">
            <h3>Please select a topic. 3</h3>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default User;
