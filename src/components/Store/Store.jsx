import StoreProducts from "./StoreProducts";

import "./Store.scss";

const Store = () => {
  return (
    <div className="store-container">
      <div className="wrapper store-details">
        <StoreProducts />
      </div>
    </div>
  );
};

export default Store;
