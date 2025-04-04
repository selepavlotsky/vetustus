import axios from "./axios";

export const peticionRegistrarVenta = (venta) => axios.post("sale", venta);

export const peticionListarHistorialCompraCliente = () =>
  axios.get(`sale/client`);
export const peticionListarDetalleCompra = (id) =>
  axios.get(`sale/detail/${id}`);
