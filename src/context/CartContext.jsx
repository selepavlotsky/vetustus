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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetalle, setIsLoadingDetalle] = useState(false);

  const listarCarrito = async () => {
    try {
      const response = await peticionListarCarrito();
      setCart(response.data);
      setCantidadProductos(response.data.length);
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (item) => {
    setIsLoading(true)
    const prodExistente = cart.find((producto) => producto.product === item.id);
    let updatedCart = [];

    if (prodExistente) {
      // si quiere agregar un prod que ya está en el carrito, verifico si la nueva cantidad supera al stock, si es asi muestro error
      let nuevaCantidad = parseInt(item.cantidad) + parseInt(prodExistente.cantidad)
      /* console.log('nueva cantidad: ' + nuevaCantidad);
       console.log('stock disponible: ' + item.stockDisponible);
 */
      if (nuevaCantidad > item.stockDisponible) {
        alert('Supera el stock disponible.')
        setIsLoading(false)
        return false;
      }
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
    setIsLoading(false)
    alert('Producto agregado al carrito')

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
    setIsLoadingDetalle(true)
    try {
      console.log('se ejecuto listar el detalle de carrito');

      const response = await peticionListarDetalleCarrito();
      setCartDetail(response.data); // guardamos los productos en el estado de cartDetail
      const cartProducts = response.data; // guardamos el detalle del carrito en cartProducts
      //calcular el total en base al response.data
      // calculamos el total con metodo reduce
      const total = cartProducts.reduce(
        (acc, product) => acc + product.precio * product.cantidad,
        0
      );
      setTotalCart(total); //guardamos el valor total en el estado totalCart
      console.log(cartProducts);
    } catch (error) {
      console.log(error);
    }
    setIsLoadingDetalle(false)
  };

  const quitarProductoCarrito = async (id) => {
    const updatedCart = cart.filter((producto) => producto.product != id);
    setCart(updatedCart);

    /*  const updatedCartDetail = cartDetail.filter(
      (producto) => producto.id != id
    );
    setCartDetail(updatedCartDetail);
    setTotalCart(
      updatedCartDetail.reduce(
        (acc, product) => acc + product.precio * product.cantidad,
        0
      )
    ); */

    setCantidadProductos(cantidadProductos - 1);
    await peticionActualizarCarrito({ cart: updatedCart });
    await listarDetalleCarrito();
  };

  const sumarCantidadCarrito = async (id) => {
    setIsLoading(true);
    const updatedCart = cart.map((producto) => {
      if (producto.product === id) {
        let nuevaCantidad = producto.cantidad + 1;
        return { ...producto, cantidad: nuevaCantidad };
      }
      return producto;
    });
    setCart(updatedCart);
    await peticionActualizarCarrito({ cart: updatedCart });
    await listarDetalleCarrito();
    setIsLoading(false);
  };

  const restarCantidadCarrito = async (id) => {
    setIsLoading(true);
    const updatedCart = cart.map((producto) => {
      if (producto.product === id) {
        let nuevaCantidad = producto.cantidad - 1;
        return { ...producto, cantidad: nuevaCantidad };
      }
      return producto;
    });
    setCart(updatedCart);
    await peticionActualizarCarrito({ cart: updatedCart });
    await listarDetalleCarrito();
    setIsLoading(false);
  };

  useEffect(() => {
    listarCarrito();
  }, []);

  const resetCartState = () => {
    setCart([]);
    setTotalCart(0);
    setCantidadProductos(0);
    setCartDetail([]);
  };

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
        quitarProductoCarrito,
        sumarCantidadCarrito,
        restarCantidadCarrito,
        resetCartState,
        isLoading,
        isLoadingDetalle
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
