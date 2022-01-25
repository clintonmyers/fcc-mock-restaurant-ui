import React, { useState } from "react";
import { getEnabledCategories } from "trace_events";

const MenuSelector = (props) => {
  return (
    <>
      <nav className="row-eats-drinks">
        <ul className="nav">
          {props.categories.map((category) => {
            return (
              <li className="nav-item">
                <button type="button" className="nav-link menu-anchor">
                  {category}
                </button>
              </li>
            );
          })}
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
    </>
  );
};
export default MenuSelector;
