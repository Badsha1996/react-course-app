import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Header.css"

import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#fff" };
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div className="nav-container">
      <MDBNavbar expand="lg" light  className="nav-border">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "10px" }}>
              <MDBIcon fas icon="book-open" />
            </span>{" "}
           COURSES
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/" className="text-white" style={({ isActive }) => (isActive ? activeStyle : {color:"aliceblue"})} >
                    Home
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <NavLink className="text-white" to="/about">
                    About
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

             
       
              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/courses" className="text-white">
                    Courses
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <NavLink className="text-white" to="/addCourse">
                    Add Course
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
