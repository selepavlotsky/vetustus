import "./ShoppingCart.scss";
import cartIcon from "../../assets/carrito.png";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <a href="#">
        <img className="shopping-cart" src={cartIcon} alt="" />
        (0)
      </a>
    </div>
  );
};

export default ShoppingCart;
