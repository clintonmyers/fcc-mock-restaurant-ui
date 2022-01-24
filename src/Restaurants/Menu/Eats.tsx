import React from "react";
import MenuItems from "./MenuItems";

const Eats = (props) => {
  return (
    <>
      <div className="eats-menu-container">
        <img className="eats-img" src={props.MenuItems.url}></img>
        <ul>
          <li>{props.MenuItems.name} </li>
          <li>${props.MenuItems.price} </li>
          <li>{props.MenuItems.description} </li>
        </ul>
      </div>
    </>
  );
};

export default Eats;
