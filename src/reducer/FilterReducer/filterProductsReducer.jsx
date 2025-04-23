//DEFINIMOS LAS ACCIONES PARA EVITAR ERRORES AL ESCRIBIR
export const ACTIONS = {
  SET_BUSQUEDA: "SET_BUSQUEDA",
  SET_MIN_PRECIO: "SET_MIN_PRECIO",
  SET_MAX_PRECIO: "SET_MAX_PRECIO",
  SET_PRODUCTOS_INICIALES: "SET_PRODUCTOS_INICIALES",
  SET_PRODUCTOS_FILTRADOS: "SET_PRODUCTOS_FILTRADOS",
  APLICAR_FILTROS: "APLICAR_FILTROS",
};

//estado inicial

export const initialState = {
  busqueda: "",
  minPrecio: 0,
  maxPrecio: Infinity,
  productosIniciales: [],
  productosFiltrados: [],
};

export const filterProductsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_BUSQUEDA:
      return { ...state, busqueda: action.payload }; // cambia el valor de la busqueda por lo que ingresa el usuario
    case ACTIONS.SET_MIN_PRECIO:
      return { ...state, minPrecio: action.payload }; // cambia el precio minimo
    case ACTIONS.SET_MAX_PRECIO:
      return { ...state, maxPrecio: action.payload }; // cambia el precio maximo
    case ACTIONS.SET_PRODUCTOS_INICIALES:
      return {
        ...state,
        productosIniciales: action.payload, // guardamos la lista original
        productosFiltrados: action.payload, // guardamos la lista con los cambios, filtrada (al principio esta igual)
      };
    case ACTIONS.SET_PRODUCTOS_FILTRADOS:
      return { ...state, productosFiltrados: action.payload }; //cambia la lista de productosFiltrados y se guarda con el cambio
    case ACTIONS.APLICAR_FILTROS:
      let filtrados = state.productosIniciales; // empezamos con todos los productos y los guardamos en FILTRADOS
      if (state.busqueda) {
        filtrados = filtrados.filter(
          (producto) =>
            producto.titulo.toLowerCase().includes(state.busqueda) || //si algo de lo que pone el usuario coincide se muestra
            producto.descripcion.toLowerCase().includes(state.busqueda)
        );
      }
      if (state.minPrecio) {
        // si hay precio minimo, se eliminan los productos que tengan precio menor a este
        filtrados = filtrados.filter(
          (producto) => producto.precio >= state.minPrecio
        );
      }
      if (state.maxPrecio) {
        // si hay preci omaximo, se eliminan los productos que tengan precio mayor a este
        filtrados = filtrados.filter(
          (producto) => producto.precio <= state.maxPrecio
        );
      }

      return { ...state, productosFiltrados: filtrados }; // actualizamos con los productos filtrados

    default:
      break;
  }
};
