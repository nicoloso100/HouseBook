import * as React from "react";
import Header from "components/molecules/Header";
import { RightContainer, LeftContainer, LoginContainer } from "./styles";
import LoginLogoCont from "components/molecules/LoginLogoCont";
import LoginForm from "components/organisms/LoginForm";
import { SingIn } from "actions/APICalls/authActions";
import { useDispatch } from "react-redux";
import { setUser } from "actions/Redux/userAction";
import { useHistory } from "react-router-dom";
import { USER_STORAGE } from "constants/userConstants";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = (values: LoginValues) => {
    SingIn(values).then((user: IUserInformation) => {
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));
      dispatch(setUser(user));
      history.push("/user");
    });
  };

  return (
    <React.Fragment>
      <Header />
      <LoginContainer>
        <LeftContainer>
          <LoginLogoCont />
        </LeftContainer>
        <RightContainer>
          <LoginForm onLogin={onLogin} />
        </RightContainer>
      </LoginContainer>
    </React.Fragment>
  );
};

export default Login;
