import axios from "./axios";

export const peticionListarCarrito = () => axios.get("carrito");
