import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";
import MenuHeader from "./MenuHeader";
import Slider from "./Slider/Slider";
import DrinksEats from "./DrinksEats";
import "./DrinksEats.scss";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <Slider />

      <nav className="row-eats-drinks">
        <ul className="nav">
          <li className="nav-item">
            <a href="#drinks" className="nav-link menu-anchor">
              drinks
            </a>
          </li>
          <li className="nav-item">
            <a href="#eats" className="nav-link menu-anchor">
              eats
            </a>
          </li>
        </ul>
      </nav>
      <div className="container jack-border">
        <div className="jack-border">
          <span>
            <img
              className="jack-image"
              src="https://res.cloudinary.com/dlsacnkot/image/upload/v1642969484/Untitled_design_1_gamgru.png"
            ></img>
          </span>
        </div>
      </div>
      <h2>Drinks</h2>
      <div>
        {MenuItems.map((item) => {
          return <DrinksEats MenuItems={item} />;
        })}
      </div>
      <h2>Eats</h2>
    </>
  );
};

export default Menu;
