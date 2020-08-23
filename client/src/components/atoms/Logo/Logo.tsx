import * as React from "react";
import { LogoCont } from "./styles";
import LogoImage from "assets/images/logos/icon.png";

const Logo: React.FC = () => {
  return <LogoCont src={LogoImage} />;
};

export default Logo;
