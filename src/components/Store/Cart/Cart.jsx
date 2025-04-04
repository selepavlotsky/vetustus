import { useEffect } from "react";
import { useCartContext } from "../../../context/CartContext";
import "./Cart.scss";
import CartItem from "./CartItem";
import { useSaleContext } from "../../../context/SaleContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const {
    cartDetail,
    listarDetalleCarrito,
    totalCart,
    cart,
    resetCartState,
    isLoading,
  } = useCartContext();

  const {
    registrarVenta,
    loadingSale,
    errors,
    ventaProcesada,
    resetSaleState,
  } = useSaleContext();

  const navigate = useNavigate();

  useEffect(() => {
    listarDetalleCarrito();
  }, []);

  const procesarVenta = (venta) => {
    registrarVenta(venta);
  };

  useEffect(() => {
    if (ventaProcesada) {
      resetCartState(); // se reinicia el carrito
      resetSaleState(); // se reinician los estados del context de venta
      navigate("/compraexitosa");
    }
  }, [ventaProcesada]);

  return (
    <section className="seccion-carrito wrapper">
      <h2>Carrito de compras</h2>
      {errors.length > 0 &&
        errors.map((error) => {
          return <p>{error.message}</p>;
        })}
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
              isLoading={isLoading}
            />
          ))}
          <div className="contenedor-total-carrito">
            <h2>
              Total: <span id="spanTotal">${totalCart} </span>
            </h2>
            <button
              onClick={() => procesarVenta({ total: totalCart, detalle: cart })}
              id="btnFinalizar"
            >
              {loadingSale ? "Procesando.." : " Finalizar Compra"}
            </button>
          </div>
        </>
      ) : (
        <p className="mensaje-carrito-vacio">El carrito está vacío</p>
      )}
    </section>
  );
};

export default Cart;

//TAREA:
// PROBAR CARRITO
// CUAND SE MODIFICA LA CANTIDAD USAR ISLOADING
// STOCK EN EL DETALLE DEL PRODUCTO , CON  INPUT PARA INGRESAR LA CNATIDAD A COMPRAR, VALIDANDO EL STOCK.
//RENDERIZAR HISTORIAL DE COMPRA DE FORMA DINAMICA EN BASE A LA PETICION A LA API.
