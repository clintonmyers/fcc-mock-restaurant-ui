import React from "react";
import MenuItems from "./MenuItems";

const Item = (props) => {
  return (
    <>
      {/* Iterate to generate the items*/}
      <div className="items-container">
        {MenuItems.map(
          (item, index) =>
            props.item == item.category && (
              <div className="item-container" key={index}>
                <img src={item.url} alt="menu item" />
                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
                <p>{item.description}</p>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Item;
