import axios from "./axios";



export const peticionCrearProducto = (product) => axios.post("product/new", product);
export const peticionListarProductos = () => axios.get("products");
export const peticionListarProductosPorCategoria = (categoria) => axios.get(`products/category/${categoria}`);
export const peticionListarProductoPorID = (id) => axios.get(`products/detail/${id}`);
