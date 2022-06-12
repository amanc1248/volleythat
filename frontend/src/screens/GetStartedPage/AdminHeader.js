import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/GetStartedPage/AdminHeader.css";
import HomeAdminLogin from "../../components/HomeAdminLogin";
import HomeEmployeeLogin from "../../components/HomeEmployeeLogin";
import {
  adminLoginClean,
  checkAdminLoginStatusClean,
} from "../../actions/adminActions";
import {
  checkEmployeeLoginStatusClean,
  employeeLoginClean,
} from "../../actions/employeeActions";
function AdminHeader() {
  const dispatch = useDispatch();
  const [adminLogin, setAdminLogin] = useState(false);
  const showAdminLogin = () => {
    dispatch(adminLoginClean());
    dispatch(checkAdminLoginStatusClean());
    setAdminLogin(true);
  };

  const [employeeLogin, setEmployeeLogin] = useState(false);
  const showEmployeeLogin = () => {
    dispatch(employeeLoginClean());
    dispatch(checkEmployeeLoginStatusClean());
    setEmployeeLogin(true);
  };
  return (
    <div className="">
      {adminLogin && (
        <HomeAdminLogin setAdminLogin={setAdminLogin}></HomeAdminLogin>
      )}
      {employeeLogin && (
        <HomeEmployeeLogin setAdminLogin={setEmployeeLogin}></HomeEmployeeLogin>
      )}
      <Navbar expand="lg" bg="#F2EBD1" className="the__navbar">
        <Navbar.Brand href="/" className={"navbar__brand"}>
          <img
            src="https://assets.website-files.com/61c070585317d242d3a59789/61c070585317d2ab23a597d1_Layer%202.svg"
            alt="volley"
          />
        </Navbar.Brand>
        {/* INside the navbar.collapse will be everything which will be collapsed */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-md-end order-lg-0 order-last"
        >
          <Nav.Link className="the__header__icon ">
            <button className="login__admin__button" onClick={showAdminLogin}>
              Admin SignIn
            </button>
          </Nav.Link>
          <Nav.Link>
            <button
              className="login__employee__button"
              onClick={showEmployeeLogin}
            >
              Employee SignIn
            </button>
          </Nav.Link>
        </Navbar.Collapse>
        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            {/* <i className="fas fa-bars hamburger"></i> */}
            <MenuIcon className="hamburger__icon"></MenuIcon>
          </span>
        </Navbar.Toggle>
      </Navbar>
    </div>
  );
}

export default AdminHeader;
