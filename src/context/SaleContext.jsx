import { createContext, useContext, useEffect, useState } from "react";
import {
  peticionRegistrarVenta,
  peticionListarHistorialCompraCliente,
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
    try {
      const response = await peticionListarHistorialCompraCliente();
      console.log(response.data);
      setComprasClientes(response.data);
      set;
    } catch (error) {
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};
