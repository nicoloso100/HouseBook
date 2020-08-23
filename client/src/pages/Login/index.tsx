import * as React from "react";
import Header from "components/molecules/Header";
import { RightContainer, LeftContainer, LoginContainer } from "./styles";
import LoginLogoCont from "components/molecules/LoginLogoCont";
import LoginForm from "components/organisms/LoginForm";
import { SingIn } from "actions/APICalls/authActions";

const Login = () => {
  const onLogin = (values: LoginValues) => {
    SingIn(values).then(() => {
      console.log("autenticado");
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
