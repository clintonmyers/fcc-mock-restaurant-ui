import "./Menu.scss";
import MenuJackSeparator from "./MenuJackSeparator";
import Item from "./Item";

const Menu = (props) => {
  return (
    <div className="menu-container">
      <MenuJackSeparator />
      <h1 className="menu-title">{props.category}</h1>
      <div className="items-container">
        {props.items.map((item, index) => (
          <Item
            name={item.name}
            price={item.price}
            description={item.description}
            index={index}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
