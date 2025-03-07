import "./Store.scss";
import productImage from "../../assets/Products/silla.jpg";
import productImage2 from "../../assets/Products/radio.jpg";

const StoreProducts = () => {
  return (
    <div>
      <div className="store-products-container">
        <h1>Productos</h1>
        <div className="products-container">
          <div className="product-container">
            <img src={productImage} alt="Imagen del producto" />
            <div className="product-content">
              <h1>Silla Antigua Mid Century restaurada</h1>
              <p>$20.567</p>
              <div className="view-product">
                <a href="#">Ver</a>
              </div>
            </div>
          </div>
          <div className="product-container">
            <img src={productImage2} alt="Imagen del producto" />
            <div className="product-content">
              <h1>Silla Antigua Mid Century restaurada</h1>
              <p>$20.567</p>
              <div className="view-product">
                <a href="#">Ver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProducts;
