import React, { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import { PuffLoader } from "react-spinners";

const CartItem = ({
  id,
  titulo,
  portada,
  precio,
  cantidad,
  stock,
  isLoading,
}) => {
  const { quitarProductoCarrito, sumarCantidadCarrito, restarCantidadCarrito } =
    useCartContext();

    console.log('loader: '+ isLoading);
    

    // El problema está aca porque al primer renderizado el estado se inicia con la primer cantidad, luego la cantidad cambia pero no puedo volver a inicializar el estado.
   //const [cantidadProducto, setCantidadProducto] = useState(cantidad);

  const handleRestarCantidad = (id) => {
    if (cantidad - 1 >= 1) {
      restarCantidadCarrito(id);
    //  setCantidadProducto(cantidadProducto - 1);
    }
  };

  const handleSumarCantidad = (id) => {
    if (cantidad + 1 <= stock) {
      sumarCantidadCarrito(id);
      //setCantidadProducto(cantidadProducto + 1);
    }
  };

  return (
    <div className="producto-carrito wrapper">
      <img
        className="imagen-producto-carrito"
        src={`Products/${portada}`}
        alt={titulo}
      />
      <h3 className="titulo-producto-carrito">{titulo}</h3>
      <div className="contenedor-cantidad">
        {
          isLoading ?
            ( // si isLoading es true entonces mostrar frase modificando cantidad
              <PuffLoader size={24}/>
              //<span className="loading-text">Modificando cantidad...</span>
            )
            :
            (
              <>
                <button
                  onClick={() => handleRestarCantidad(id)}
                  className="restar-cantidad"
                >
                  -
                </button>
                <span>{cantidad}</span>
                <button
                  onClick={() => handleSumarCantidad(id)}
                  className="sumar-cantidad"
                >
                  +
                </button>
              </>
            )
        }

      </div>

      <p className="precio-producto-carrito">${precio}</p>
      <p className="subtotal-producto-carrito">${precio * cantidad}</p>
      <div className="contenedor-btn">
        <button
          onClick={() => quitarProductoCarrito(id)}
          className="btn-quitar-producto-carrito"
        >
          Quitar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
