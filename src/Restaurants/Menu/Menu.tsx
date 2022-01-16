import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";
import MenuHeader from "./MenuHeader";
import Slider from "./Slider";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <Slider />
      <div className="drinks">Drinks___</div>
      <div className="eats">Eats__</div>
      <div className="imgdrink">Images of Drink</div>
      <div className="imgeat">Images of Eat</div>
      <ul>
        <li>{MenuItems.map((menuitems) => menuitems.name)}</li>
      </ul>
    </>
  );
};

export default Menu;
