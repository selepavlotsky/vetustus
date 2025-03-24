import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, listarCarrito } = useCartContext();

  useEffect(() => {
    listarCarrito();
  }, []);

  return (
    <section>
      <h2>Carrito de compras</h2>
      {cart && console.log(cart)}
    </section>
  );
};

export default Cart;
