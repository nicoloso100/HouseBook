import * as React from "react";
import {
    BackgroundLogin,    
} from "./styles2";
import Logo from "molecules/LoginLogo/index";
import ContLoginForms from "molecules/ContLoginForms/index";

const Login = () => {
  return (
    <BackgroundLogin>
      <Logo/>
      <ContLoginForms/>
    </BackgroundLogin>
  );
};

export default Login;