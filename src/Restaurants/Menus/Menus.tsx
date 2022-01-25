import React, { useState } from "react";
import MenuItems, { MenuItem } from "./MenuItems";
import "./Menu.scss";
import MenuHeader from "./MenuHeader";
import Slider from "./Slider/Slider";
import DrinksEats from "./DrinksEats";
import "./DrinksEats.scss";
import MenuSelector from "./MenuSelector";

//Pure function
const generateCategories = (menuItems: MenuItem[]): string[] => {
  // mapping over MenuItems, to create array Of Category
  let listCategory: string[] = MenuItems.map((item: MenuItem) => item.category);
  // remove duplicate from array
  return Array.from(new Set(listCategory));
};

const Menus = () => {
  const [categories, setCategories] = useState(generateCategories(MenuItems)); // value is set to "Drinks" "Eats", setCategories changes Categories
  const [category, setCategory] = useState(null); //setCategory changes Category

  return (
    <>
      <MenuHeader />
      <Slider />
      <MenuSelector categories={categories} />

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

export default Menus;
//
