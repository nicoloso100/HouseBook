import * as React from "react";
import { LogoCont , Logo2Cont} from "./styles";
import LogoImage from "assets/images/logos/icon.png";
import Logo2Image from "assets/images/logos/icon2.png";

const Logo = () => {
  return <LogoCont src={LogoImage} />;
};

const Logo2 = () => {
  return <Logo2Cont src={Logo2Image} />;
};

export {Logo, Logo2};