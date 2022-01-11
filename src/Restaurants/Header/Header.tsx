import React, { useState } from "react";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="nav-container">
          <button id="menuBtn" onClick={() => setShow(!show)}>
            {" "}
            <img src=".//FccBrunchLogo.png" alt="my image" id="logoBtn" />
            {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
          </button>
          {show ? <Navbar /> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
