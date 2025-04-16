import "./Store.scss";
import { Link } from "react-router";

const Product = ({ id, titulo, portada, precio }) => {
  

  return (
    <div className="product-container">
      <img src={`/Products/${portada}`} alt="Imagen del producto" />
      <div className="product-content">
        <h1>{titulo}</h1>
        <p>${precio}</p>
        <div className="view-product">
          <Link to={`/store/detalle/${id}`} className="btn-view">
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
