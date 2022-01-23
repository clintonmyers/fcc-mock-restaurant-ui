import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <>
      <ul className="nav-links">
        <HamburgerMenu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </HamburgerMenu>
      </ul>
    </>
  );
};

export default Navbar;
