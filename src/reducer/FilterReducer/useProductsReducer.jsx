import { useReducer } from "react";
import {
  ACTIONS,
  filterProductsReducer,
  initialState,
} from "./filterProductsReducer";

export const useProductsReducer = () => {
  const [state, dispatch] = useReducer(filterProductsReducer, initialState);
  const {
    // desestructuracion del estado
    busqueda,
    minPrecio,
    maxPrecio,
    productosFiltrados,
    productosIniciales,
  } = state;

  return {
    // retornamos las propiedades y las funciones del estado
    busqueda,
    minPrecio,
    maxPrecio,
    productosFiltrados,
    productosIniciales,
    //funciones para modificar el estado, en vez de pasar el dispatch , llamamos a la funcion correspondiente luego
    updateBusqueda: (term) =>
      dispatch({ type: ACTIONS.SET_BUSQUEDA, payload: term }),
    updateMinPrecio: (value) =>
      dispatch({ type: ACTIONS.SET_MIN_PRECIO, payload: value }),
    updateMaxPrecio: (value) =>
      dispatch({ type: ACTIONS.SET_MAX_PRECIO, payload: value }),
    setearProductosIniciales: (productos) =>
      dispatch({ type: ACTIONS.SET_PRODUCTOS_INICIALES, payload: productos }),
    aplicarFiltros: () => dispatch({ type: ACTIONS.APLICAR_FILTROS }),
  };
};
