import React, { useState } from "react";
import MenuItems, { MenuItem } from "./MenuItems";
import "./Menu.scss";
import MenuHeader from "./MenuHeader";
import Slider from "./Slider/Slider";
import Item from "./Item";
import "./Item.scss";
import MenuSelector from "./MenuSelector";
import Menu from "./Menu";

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
      <h3>the category is {category || "not Set"} </h3>

      <MenuSelector categories={categories} setCategory={setCategory} />
      <Menu />
      <Item item={category} />
    </>
  );
};

export default Menus;
