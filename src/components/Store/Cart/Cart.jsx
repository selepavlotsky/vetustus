import { useEffect } from "react";
import { useCartContext } from "../../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartDetail, listarDetalleCarrito, totalCart } = useCartContext();

  useEffect(() => {
    listarDetalleCarrito();
  }, []);

  return (
    <>
      <section className="seccion-carrito wrapper">
        <h2>Carrito de compras</h2>
        <div className="cabecera-tabla">
          <div className="cabecera-tabla-col">Producto</div>
          <div className="cabecera-tabla-col">Título</div>
          <div className="cabecera-tabla-col">Cantidad</div>
          <div className="cabecera-tabla-col">Precio</div>
          <div className="cabecera-tabla-col">Subtotal</div>
          <div className="cabecera-tabla-col">Acción</div>
        </div>
      </section>

      {cartDetail.length > 0 ? ( // si hay productos en el carrito lo recorremos para mostrar cada uno
        <>
          {cartDetail.map((producto) => (
            <div className="producto-carrito wrapper">
              <img
                className="imagen-producto-carrito"
                src={`Products/${producto.portada}`}
                alt={producto.titulo}
              />
              <h3 className="titulo-producto-carrito">{producto.titulo}</h3>
              <div className="contenedor-cantidad">
                <button
                  onClick={() => restarCantidadCarrito(producto.id)}
                  className="restar-cantidad"
                >
                  -
                </button>
                <span>{producto.cantidad}</span>
                <button
                  onClick={() => sumarCantidadCarrito(producto.id)}
                  className="sumar-cantidad"
                >
                  +
                </button>
              </div>
              <p className="precio-producto-carrito">${producto.precio}</p>
              <p className="subtotal-producto-carrito">
                ${producto.precio * producto.cantidad}
              </p>
              <div className="contenedor-btn">
                <button
                  onClick={() => quitarProductoCarrito(producto.id)}
                  className="btn-quitar-producto-carrito"
                >
                  Quitar
                </button>
              </div>
            </div>
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
    </>
  );
};

export default Cart;
