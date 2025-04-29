import { createContext, useContext, useState } from "react";
import {
  peticionListarProductos,
  peticionListarProductoPorID,
  peticionListarProductosPorCategoria,
  peticionListarProductosAdmin,
} from "../API/Productos";

export const ProductsContext = createContext(); // creamos el contexto, nos va a servir para compartir el estado de los productos en toda la app

//creamos la funcion para llamar al contexto
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    // si no hay contexto error
    throw new Error("El ProductsContext debe ser utilizado con UserProvider");
  }
  return context;
};

//creamos el provider
export const ProductsProvider = ({ children }) => {
  const [listadoProductos, setListadoProductos] = useState([]); // este estado lo creamos para almacenar la lista de productos que obtenemos de la API, arranca vacio.
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [errors, setErrors] = useState([]);
  const [listadoProductosAdmin, setListadoProductosAdmin] = useState([]); //creamos el estado para los productos del admin

  const listarProductosAdmin = async () => {
    try {
      const response = await peticionListarProductosAdmin();
      setListadoProductosAdmin(response.data);
      setErrors([]);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const listarProductos = async () => {
    try {
      const response = await peticionListarProductos(); //llamamos a la peticion para obtener los productos
      setListadoProductos(response.data); //guardamos los productos en listadoProductos
      setErrors([]); //si hay error se guardan los errores en errors
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const listarProductosPorCategoria = async (categoria) => {
    try {
      const response = await peticionListarProductosPorCategoria(categoria);
      setListadoProductos(response.data);
      setErrors([]);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const listarDetalleProducto = async (id) => {
    try {
      const response = await peticionListarProductoPorID(id); // obtiene un producto especifico mediante su id
      setDetalleProducto(response.data); //se guarda en detalleProducto
      setErrors([]);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  return (
    //envolvemos en el provider los componentes hijos, se pasan valores y funcoones paara que los hijos puedan utilizar el contexto
    <ProductsContext.Provider
      value={{
        listarProductos,
        listadoProductos,
        errors,
        detalleProducto,
        listarProductosPorCategoria,
        listarDetalleProducto,
        listarProductosAdmin,
        listadoProductosAdmin,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
