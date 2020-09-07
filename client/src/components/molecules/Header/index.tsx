import * as React from "react";
import {
  NavigationHeaderCont,
  NavigationHeaderButtonsCont,
  NavigationHeaderButton,
} from "./styles";
import Logo from "components/atoms/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "states";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  let history = useHistory();

  const onLogoClick = () => {
    history.push("/home");
  };

  const onLoginClick = () => {
    history.push("/login");
  };

  const onDashboardClick = () => {
    history.push("/user");
  };

  return (
    <NavigationHeaderCont>
      <Logo onClick={onLogoClick} />
      <NavigationHeaderButtonsCont>
        {user === null ? (
          <NavigationHeaderButton onClick={onLoginClick}>
            Ingresar
          </NavigationHeaderButton>
        ) : (
          <NavigationHeaderButton onClick={onDashboardClick}>
            Dashboard
          </NavigationHeaderButton>
        )}
      </NavigationHeaderButtonsCont>
    </NavigationHeaderCont>
  );
};

export default Header;
