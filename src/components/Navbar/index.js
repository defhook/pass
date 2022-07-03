import { logDOM } from "@testing-library/react";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  Navbtn,
  NavBtnLink,
  HeaderImage,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../assets/images/PASS-logo-copy.png")}
            alt="logo"
          />

          <h1>PASS</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" style>
            Home
          </NavLink>
         
          <NavLink to="/favorites" style>
            Favorites
          </NavLink>
          
        </NavMenu>
        <input type="text" placeholder="Search..."></input>
        <Navbtn>
          <NavBtnLink to="/search">Search</NavBtnLink>
        </Navbtn>
        <Navbtn>
          <NavBtnLink to="/Login">Login</NavBtnLink>
        </Navbtn>
      </Nav>
    </>
  );
};

export default Navbar;