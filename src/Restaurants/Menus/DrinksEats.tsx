import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";

const DrinksEats = (props) => {
  return (
    <>
      <div className="drink-eat-container">
        <ul>
          <li>{props.MenuItems.name} </li>
          <li>${props.MenuItems.price} </li>
          <li>{props.MenuItems.description} </li>
        </ul>
      </div>
    </>
  );
};

export default DrinksEats;

// <img className="drink-eat-img" src={props.MenuItems.url}></img>
