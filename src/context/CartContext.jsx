import { createContext, useContext, useEffect, useState } from "react";
import {
  peticionActualizarCarrito,
  peticionListarCarrito,
  peticionListarDetalleCarrito,
} from "../API/cart";

export const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("El CartContext requiere ser utilizado con CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [cartDetail, setCartDetail] = useState([]);

  const listarCarrito = async () => {
    try {
      const response = await peticionListarCarrito();
      setCart(response.data);
      setCantidadProductos(response.data.length);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (item) => {
    const prodExistente = cart.find((producto) => producto.product === item.id);

    let updatedCart = [];
    if (prodExistente) {
      // si el producto ya existe en el carrito
      updatedCart = cart.map((producto) => {
        if (producto.product === item.id) {
          return {
            ...producto,
            cantidad: producto.cantidad + item.cantidad,
          };
        }
        return producto;
      });
    } else {
      // si el producto no existe aun en el carrito
      updatedCart = [...cart, { product: item.id, cantidad: item.cantidad }];
      setCantidadProductos(cantidadProductos + 1);
    }
    setCart(updatedCart);
    setTotalCart(totalCart + item.precio * item.cantidad);

    await peticionActualizarCarrito({ cart: updatedCart });

    /*   setTotalCart((prevState) => {
      return prevState + item.precio * item.cantidad;
    }); */
  };

  /*   const cargarCarrito = async () => {
    await listarCarrito();
    setCantidadProductos(cart.length);
    setTotalCart(
      cart.reduce(
        (total, producto) => producto.cantidad * producto.precio + total,
        0
      )
    );
  }; */

  const listarDetalleCarrito = async () => {
    try {
      const response = await peticionListarDetalleCarrito();
      const cartProducts = response.data; // guardamos el detalle del carrito en cartProducts

      //calcular el total en base al response.data
      // calculamos el total con metodo reduce
      const total = cartProducts.reduce(
        (acc, product) => acc + product.precio * product.cantidad,
        0
      );
      setCartDetail(cartProducts); // guardamos los productos en el estado de cartDetail
      setTotalCart(total); //guardamos el valor total en el estado totalCart
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarCarrito();
  }, []);

  return (
    <CartContext.Provider
      value={{
        listarCarrito,
        cart,
        addItem,
        totalCart,
        cantidadProductos,
        cartDetail,
        listarDetalleCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/*
  Ej cart: 

  [
    {product:'asd32131asd', cantidad:4},
     {product:'abc32131asd', cantidad:1},
  ]
*/
