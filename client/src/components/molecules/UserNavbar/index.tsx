import * as React from "react";
import { defaultFilters } from "constants/filterConstants";
import {
  Navbar,
  Container,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
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

const UserNavbar: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-warning">
        <UserNavbarHeaderCont>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/user/index"
          >
            DASHBOARD
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
                      Nicolás Angarita
                    </UserNavbarTitle>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </UserNavbarHeaderCont>
        <UserNavbarTitleCont>
          <UserNavbarTitle>Hola, Nicolás Angarita</UserNavbarTitle>
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
