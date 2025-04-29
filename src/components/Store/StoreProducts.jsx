import "./Store.scss";
import { Link, useParams } from "react-router";
import { useEffect, useRef } from "react";
import Product from "./Product";
import { useProductsContext } from "../../context/ProductsContext";
import { useProductsReducer } from "../../reducer/FilterReducer/useProductsReducer";
import ProductSearchBar from "../ProductSearchBar/ProductSearchBar";

const StoreProducts = () => {
  const { listarProductos, listarProductosPorCategoria, listadoProductos } =
    useProductsContext(); // accedemos a la funciones y estados del contexto

  // se inician en null ya que el valor incial esta vacio, luego se cambiara por lo que ingrese el usuario. Lo pasamos en el input
  const minPrecioRef = useRef(null);
  const maxPrecioRef = useRef(null);

  const { categoria } = useParams();

  const {
    busqueda,
    minPrecio,
    maxPrecio,
    productosFiltrados,
    updateBusqueda,
    updateMinPrecio,
    updateMaxPrecio,
    setearProductosIniciales,
    aplicarFiltros,
  } = useProductsReducer();
  // utilizamos el ProductsREDUCER

  const handleClickPrecios = () => {
    const minValue = parseInt(minPrecioRef.current.value);
    const maxValue = parseInt(maxPrecioRef.current.value);
    updateMinPrecio(minValue);
    updateMaxPrecio(maxValue);
  };

  useEffect(() => {
    if (categoria) {
      //si hay categoria listame los productos de esa categoria
      listarProductosPorCategoria(categoria);
    } else {
      // sino mostrame todos los productos
      listarProductos();
    }
  }, [categoria]);

  useEffect(() => {
    // si listado de productos existe y tiene al menos un producto, que se guarden en productosIniciales
    if (listadoProductos && listadoProductos.length > 0) {
      setearProductosIniciales(listadoProductos);
    }
  }, [listadoProductos]);

  useEffect(() => {
    // se ejecuta cada vez que algun filtro cambia
    aplicarFiltros();
  }, [busqueda, minPrecio, maxPrecio]);

  return (
    <>
      <div className="categories-container">
        <h1>Categorías</h1>
        <div className="categories-details">
          <Link className="categories-items" to="/store">
            Todas las categorías
          </Link>
          <Link className="categories-items" to="/store/categoria/mesasdeluz">
            Mesitas de luz
          </Link>
          <Link className="categories-items" to="/store/categoria/Sillas">
            Sillas
          </Link>
          <Link className="categories-items" to="/store/categoria/relojes">
            Relojes
          </Link>
          <Link className="categories-items" to="/store/categoria/radios">
            Radios
          </Link>
          <Link className="categories-items" to="/store/categoria/telefonos">
            Teléfonos
          </Link>
          <Link className="categories-items" to="/store/categoria/otros">
            Otros
          </Link>
        </div>

        <div className="search-container">
          <ProductSearchBar
            busqueda={busqueda}
            updateBusqueda={updateBusqueda}
          />
        </div>

        <div className="price-container">
          <h2>Precio:</h2>
          <div>
            <label htmlFor="minPrecioInput">Min.</label>
            <input
              ref={minPrecioRef}
              className="form-control"
              id="minPrecioInput"
              type="number"
              min={0}
              step={500}
            />

            <label htmlFor="maxPrecioInput">Max.</label>
            <input
              ref={maxPrecioRef}
              className="form-control"
              id="maxPrecioInput"
              type="number"
              min={0}
              step={500}
            />
            <button onClick={handleClickPrecios} className="filter-button">
              Aplicar
            </button>
          </div>
        </div>
      </div>
      <div className="store-products-section">
        <h1>Productos</h1>
        <div className="store-products-container">
          {
            //mostramos los productos filtrados si los hay
            productosFiltrados && productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => {
                return (
                  <Product
                    key={producto._id}
                    id={producto._id}
                    titulo={producto.titulo}
                    portada={producto.portada}
                    precio={producto.precio}
                  />
                );
              })
            ) : (
              <p>No se han encontrado resultados.</p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
