import React, { useState } from "react";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header-container">
        <img src=".//FccBrunchLogo.png" alt="my image" id="logoImg" />

        {/* <div className="nav-container">
          <button id="menuBtn" onClick={() => setShow(!show)}>
            {" "}
            <img src=".//FccBrunchLogo.png" alt="my image" id="logoBtn" />
          </button>
          {show ? <Navbar /> : null}
        </div> */}
        <Navbar />
      </div>
    </>
  );
};

export default Header;
