import "./ShoppingCart.scss";
import cartIcon from "../../assets/carrito.png";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router";

const ShoppingCart = () => {
  const { cantidadProductos } = useCartContext();
  return (
    <div className="shopping-cart-container">
      <Link to="/cart">
        <img className="shopping-cart" src={cartIcon} alt="" />(
        {cantidadProductos})
      </Link>
    </div>
  );
};

export default ShoppingCart;
