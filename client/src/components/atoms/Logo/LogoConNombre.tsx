import * as React from "react";
import Logo from "assets/images/logos/icon2.png";
import { LogoConNombreCont } from "./styles";

const LogoConNombre: React.FC = () => {
  return <LogoConNombreCont src={Logo} />;
};

export default LogoConNombre;
