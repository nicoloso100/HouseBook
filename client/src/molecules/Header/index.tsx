import * as React from "react";
import {
  NavigationHeaderCont,
  NavigationHeaderButtonsCont,
  NavigationHeaderButton,
} from "./styles";
import Logo from "atoms/Logo";

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
