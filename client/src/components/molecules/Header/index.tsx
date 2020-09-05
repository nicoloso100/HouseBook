import * as React from "react";
import {
  NavigationHeaderCont,
  NavigationHeaderButtonsCont,
  NavigationHeaderButton,
} from "./styles";
import Logo from "components/atoms/Logo/Logo";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  let history = useHistory();

  const onLogoClick = () => {
    history.push("/home");
  };

  return (
    <NavigationHeaderCont>
      <Logo onClick={onLogoClick} />
      <NavigationHeaderButtonsCont>
        <NavigationHeaderButton>Publicar inmueble</NavigationHeaderButton>
        <NavigationHeaderButton>Ingresar</NavigationHeaderButton>
      </NavigationHeaderButtonsCont>
    </NavigationHeaderCont>
  );
};

export default Header;
