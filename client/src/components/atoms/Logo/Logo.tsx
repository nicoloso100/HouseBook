import * as React from "react";
import { LogoCont } from "./styles";
import LogoImage from "assets/images/logos/icon.png";

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <LogoCont
      onClick={onClick && onClick}
      mycursor={onClick ? "pointer" : "auto"}
      src={LogoImage}
    />
  );
};

export default Logo;
