import * as React from "react";
import Header from "components/molecules/Header";
import { RightContainer, LeftContainer, LoginContainer } from "./styles";
import LoginLogoCont from "components/molecules/LoginLogoCont";
import RegisterUserForm from "components/organisms/RegisterUserForm";
import { SingUp } from "actions/APICalls/authActions";

const Login: React.FC = () => {
  const onRegisterUser = (values: registerUserValues) => {
    SingUp(values).then(() => {
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
          <RegisterUserForm onRegisterUser={onRegisterUser} />
        </RightContainer>
      </LoginContainer>
    </React.Fragment>
  );
};

export default Login;
