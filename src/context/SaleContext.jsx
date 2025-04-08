import { createContext, useContext, useEffect, useState } from "react";
import {
  peticionRegistrarVenta,
  peticionListarHistorialCompraCliente,
  peticionListarDetalleCompra,
} from "../API/sale";

export const SaleContext = createContext();

export const useSaleContext = () => {
  const context = useContext(SaleContext);
  if (!context) {
    throw new Error("El SaleContext requiere ser utilizado con SaleProvider");
  }
  return context;
};

export const SaleProvider = ({ children }) => {
  const [loadingSale, setLoadingSale] = useState(false);
  const [errors, setErrors] = useState([]);
  const [ventaProcesada, setVentaProcesada] = useState(false);
  const [comprasCliente, setComprasClientes] = useState([]);
  const [detalleCompra, setDetalleCompra] = useState(null);
  const [showModalSaleDetail, setShowModalSaleDetail] = useState(false);

  const registrarVenta = async (venta) => {
    setLoadingSale(true);
    try {
      const response = await peticionRegistrarVenta(venta);
      console.log(response.data);
      setErrors([]);
      setVentaProcesada(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }

    setLoadingSale(false);
  };

  const listarHistorialComprasCliente = async () => {
    setLoadingSale(true);
    try {
      const response = await peticionListarHistorialCompraCliente();
      console.log(response.data);
      setComprasClientes(response.data);
      setErrors([]);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
    setLoadingSale(false);
  };

  const toggleModalSaleDetail = () => {
    setShowModalSaleDetail((prevState) => {
      return !prevState
    })
  }

  const listarDetalleCompra = async (id) => {

    try {
      const response = await peticionListarDetalleCompra(id);
      console.log(response.data);
      setDetalleCompra(response.data);
      setErrors([]);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }

  }
  const resetSaleState = () => {
    setVentaProcesada(false);
    setErrors([]);
  };


  return (
    <SaleContext.Provider
      value={{
        registrarVenta,
        loadingSale,
        errors,
        ventaProcesada,
        resetSaleState,
        comprasCliente,
        listarHistorialComprasCliente,
        toggleModalSaleDetail,
        showModalSaleDetail,
        listarDetalleCompra,
        detalleCompra
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};
