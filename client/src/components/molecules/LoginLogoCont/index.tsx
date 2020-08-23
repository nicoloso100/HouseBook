import * as React from "react";
import { CircleContainer } from "./styles";
import LogoConNombre from "components/atoms/Logo/LogoConNombre";

const LoginLogoCont: React.FC = () => {
  return (
    <CircleContainer>
      <LogoConNombre />
    </CircleContainer>
  );
};

export default LoginLogoCont;
