import { createContext, useContext, useEffect, useState } from "react";
import { peticionListarCarrito } from "../API/cart";

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
  const listarCarrito = async () => {
    try {
      const response = await peticionListarCarrito();
      setCart(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        listarCarrito,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
