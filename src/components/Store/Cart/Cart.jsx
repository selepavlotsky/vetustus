import { useEffect } from "react";
import { useCartContext } from "../../../context/CartContext";
import "./Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartDetail, listarDetalleCarrito, totalCart, cart } = useCartContext();

  useEffect(() => {
    listarDetalleCarrito();
  }, []);

  return (
    <section className="seccion-carrito wrapper">
      <h2>Carrito de compras</h2>
      {cartDetail.length > 0 ? ( // si hay productos en el carrito lo recorremos para mostrar cada uno
        <>
          <div className="cabecera-tabla">
            <div className="cabecera-tabla-col">Producto</div>
            <div className="cabecera-tabla-col">Título</div>
            <div className="cabecera-tabla-col">Cantidad</div>
            <div className="cabecera-tabla-col">Precio</div>
            <div className="cabecera-tabla-col">Subtotal</div>
            <div className="cabecera-tabla-col">Acción</div>
          </div>
          {cartDetail.map((producto) => (
            <CartItem
              key={producto.id}
              id={producto.id}
              titulo={producto.titulo}
              portada={producto.portada}
              precio={producto.precio}
              cantidad={producto.cantidad}
              stock={producto.stock}
            />
          ))}
          <div className="contenedor-total-carrito">
            <h2>
              Total: <span id="spanTotal">${totalCart} </span>
            </h2>
            <a href="#" id="btnFinalizar">
              Finalizar Compra
            </a>
          </div>
        </>
      ) : (
        <p className="mensaje-carrito-vacio">El carrito está vacío</p>
      )}
    </section>
  );
};

export default Cart;
