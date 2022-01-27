import React, { useState } from "react";
import { getEnabledCategories } from "trace_events";

const MenuSelector = (props) => {
  return (
    <>
      <nav className="row-menu-selector">
        <ul className="nav">
          {props.categories.map((category) => {
            return (
              <li className="nav-item">
                <button
                  onClick={() => props.setCategory(category)}
                  type="button"
                >
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
