import axios from "./axios";

export const peticionListarCarrito = () => axios.get("carrito");

export const peticionActualizarCarrito = (cart) => axios.post("carrito", cart);

export const peticionListarDetalleCarrito = () => axios.get("carrito/detalle");
