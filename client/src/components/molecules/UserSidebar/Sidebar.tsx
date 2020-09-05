import * as React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import UserImage from "assets/images/icons/user.png";
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { SidebarLogoCont, SidebarLogoTitle } from "./styles";
import Logo from "components/atoms/Logo/Logo";

const UserSidebar: React.FC = () => {
  const [collapseOpen, setCollapseOpen] = React.useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <SidebarLogoCont>
          <Logo />
          <SidebarLogoTitle>House Book</SidebarLogoTitle>
        </SidebarLogoCont>
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="..." src={UserImage} />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Hola!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Collapse navbar isOpen={collapseOpen}>
          <div className="navbar-collapse-header d-md-none">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleCollapse}
            >
              <span />
              <span />
            </button>
            <div className="navbar-collapse-header-text">
              <h3>¿Qué deseas hacer?</h3>
            </div>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink
                to={"/user/index"}
                tag={NavLinkRRD}
                onClick={closeCollapse}
                activeClassName="active"
              >
                <i className="fa fa-list text-info" />
                Mis publicaciones
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/user/create"}
                tag={NavLinkRRD}
                onClick={closeCollapse}
                activeClassName="active"
              >
                <i className="fa fa-file text-success" />
                Crear publicaciones
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/user/edit"}
                tag={NavLinkRRD}
                onClick={closeCollapse}
                activeClassName="active"
              >
                <i className="fa fa-file text-primary" />
                Editar publicaciones
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/user/delete"}
                tag={NavLinkRRD}
                onClick={closeCollapse}
                activeClassName="active"
              >
                <i className="fa fa-file text-danger" />
                Eliminar publicaciones
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default UserSidebar;
