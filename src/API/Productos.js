import axios from "./axios";

export const peticionCrearProducto = (product) =>
  axios.post("product/new", product);
export const peticionListarProductos = () => axios.get("products");
export const peticionListarProductosPorCategoria = (categoria) =>
  axios.get(`products/category/${categoria}`);
export const peticionListarProductoPorID = (id) =>
  axios.get(`products/detail/${id}`);

//PETICIONES ADMIN

export const peticionListarProductosAdmin = () => axios.get("panel/products");

export const peticionCrearProductoAdmin = (newProduct) =>
  axios.post("panel/product/new", newProduct);

export const peticionModificarProductoAdmin = (id, productoModificado) =>
  axios.put(`panel/product/${id}`, productoModificado);

export const peticionModificarEstadoProductoAdmin = (id) =>
  axios.put(`panel/product/state/${id}`);

export const peticionEliminarProductoAdmin = (id) =>
  axios.delete(`panel/product/${id}`);
