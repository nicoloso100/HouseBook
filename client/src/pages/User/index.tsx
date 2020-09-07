import * as React from "react";
import UserSidebar from "components/molecules/UserSidebar/Sidebar";
import UserNavbar from "components/molecules/UserNavbar";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import MyPosts from "./MyPosts";
import { useSelector } from "react-redux";
import { RootState } from "states";
import EditPosts from "./EditPosts";
import RemovePosts from "./RemovePosts";
import CreatePosts from "./CreatePost";

const redirectMainPath = () => <Redirect to="/user/index" />;

const User: React.FC = () => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.userReducer);

  React.useEffect(() => {
    if (user === null) {
      history.push("/home");
    }
  }, [user, history]);

  return (
    <>
      <UserSidebar />
      <div className="main-content">
        <UserNavbar />
        <Switch>
          <Route exact path="/user" render={redirectMainPath} />
          <Route exact path="/user/index">
            <MyPosts />
          </Route>
          <Route path="/user/create">
            <CreatePosts />
          </Route>
          <Route path="/user/edit">
            <EditPosts />
          </Route>
          <Route path="/user/delete">
            <RemovePosts />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default User;
