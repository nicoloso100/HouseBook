import * as React from "react";
import {
  NavigationHeaderCont,
  NavigationHeaderButtonsCont,
  NavigationHeaderButton,
} from "./styles";
import { Logo } from "components/atoms/Logo";

const Header = () => {
  return (
    <NavigationHeaderCont>
      <Logo />
      <NavigationHeaderButtonsCont>
        <NavigationHeaderButton>Publicar inmueble</NavigationHeaderButton>
        <NavigationHeaderButton>Ingresar</NavigationHeaderButton>
      </NavigationHeaderButtonsCont>
    </NavigationHeaderCont>
  );
};

export default Header;
