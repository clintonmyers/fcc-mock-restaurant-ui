import "./MenuSelector.scss";

const MenuSelector = (props) => {
  return (
    <>
      <nav className="row-menu-selector">
        <ul className="nav">
          {props.categories.map((category) => {
            return (
              <li className="nav-item">
                <button
                  onClick={() => {
                    // Set category or reset on second click
                    if (props.selectedCategory === category) {
                      props.setCategory(null);
                    } else {
                      props.setCategory(category);
                    }
                  }}
                  className={
                    // Sets active class if category is currently selected
                    props.selectedCategory === category ? "active" : ""
                  }
                  type="button"
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default MenuSelector;
