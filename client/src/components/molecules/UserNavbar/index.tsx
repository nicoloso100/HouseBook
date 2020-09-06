import * as React from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import UserImage from "assets/images/icons/user.png";
import {
  UserNavbarTitle,
  UserNavbarHeaderCont,
  UserNavbarTitleCont,
  UserNavbarCountdown,
  UserNavbarCountdownCont,
} from "./styles";
import { USER_STORAGE } from "constants/userConstants";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "actions/Redux/userAction";
import { RootState } from "states";

const UserNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);

  const onLogout = (e: any) => {
    localStorage.removeItem(USER_STORAGE);
    dispatch(resetUser());
    e.preventDefault();
  };

  const getName = React.useMemo(() => {
    const name = user?.name.split(" ");
    if (name) {
      return `${name[0]} ${name[1]}`;
    }
    return "Bienvenido devuelta";
  }, [user]);

  return (
    <div>
      <div className="bg-gradient-warning">
        <UserNavbarHeaderCont>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/home"
          >
            REGRESAR
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="..." src={UserImage} />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <UserNavbarTitle className="mb-0 text-sm font-weight-bold">
                      {getName}
                    </UserNavbarTitle>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Hola!</h6>
                </DropdownItem>
                <DropdownItem onClick={onLogout}>
                  <i className="ni ni-user-run" />
                  <span>Cerrar sesión</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </UserNavbarHeaderCont>
        <UserNavbarTitleCont>
          <UserNavbarTitle>Hola, {getName}</UserNavbarTitle>
          <UserNavbarCountdownCont>
            <UserNavbarCountdown>
              Te quedan 13 días restantes para terminar el periodo de prueba
            </UserNavbarCountdown>
          </UserNavbarCountdownCont>
        </UserNavbarTitleCont>
      </div>
    </div>
  );
};

export default UserNavbar;
