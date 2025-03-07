import Categories from "./Categories";
import Product from "./Product";
import "./Store.scss";

const Store = () => {
  return (
    <div>
      <div className="store-container">
        <div className="wrapper store-details">
          <Categories />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Store;
