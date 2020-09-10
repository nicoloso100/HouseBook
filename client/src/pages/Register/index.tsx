import * as React from "react";
import Header from "components/molecules/Header";
import { RightContainer, LeftContainer, SignInContainer } from "./styles";
import LoginLogoCont from "components/molecules/LoginLogoCont";
import { SingUp } from "actions/APICalls/authActions";
import RegisterForm from "components/organisms/RegisterUserForm";
import Footer from "components/molecules/Footer";

const Register: React.FC = () => {
  const onRegisterUser = (values: registerUserValues) => {
    return SingUp(values);
  };

  return (
    <React.Fragment>
      <Header />
      <SignInContainer>
        <LeftContainer>
          <LoginLogoCont />
        </LeftContainer>
        <RightContainer>
          <RegisterForm onRegisterUser={onRegisterUser} />
        </RightContainer>
      </SignInContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Register;
