import React, { useState } from "react";
import MenuItems, { MenuItem } from "./MenuItems";
import "./Menu.scss";
import MenuHeader from "./MenuHeader";
import Slider from "./Slider/Slider";
import MenuSelector from "./MenuSelector";
import MenuJackSeparator from "./MenuJackSeparator";
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
      <MenuSelector
        selectedCategory={category}
        categories={categories}
        setCategory={setCategory}
      />
      <MenuJackSeparator />
      <div className="menus-container">
        {/* If a category is not selected, generate all menus,
        otherwise, only generate the menu of the selected category */}
        {category ? (
          <Menu
            category={category}
            items={MenuItems.filter((item) => item.category === category)}
          />
        ) : (
          categories.map((category, index) => (
            <Menu
              category={category}
              items={MenuItems.filter((item) => item.category === category)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Menus;
