import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";

const Drinks = (props) => {
  return (
    <>
      <div className="drink-menu-container">
        <img className="drink-img" src={props.MenuItems.url}></img>
        <ul>
          <li>{props.MenuItems.name} </li>
          <li>${props.MenuItems.price} </li>
          <li>{props.MenuItems.description} </li>
        </ul>
      </div>
    </>
  );
};

export default Drinks;
