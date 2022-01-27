import "./Item.scss";

const Item = (props) => {
  return (
    <div className="item-container" key={props.index}>
      <img src={props.url} alt="menu item" />
      <h3>{props.name}</h3>
      <h3>${props.price}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Item;
