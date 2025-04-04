import "./Store.scss";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import Product from "./Product";
import { useProductsContext } from "../../context/ProductsContext";


const StoreProducts = () => {

  const { listarProductos, listarProductosPorCategoria, listadoProductos } =
    useProductsContext(); // accedemos a la funciones y estados del contexto
  const { categoria } = useParams(); // extraemos el parametro categoria de la url.

  useEffect(() => {
    if (categoria) {
      //si hay categoria listame los productos de esa categoria
      listarProductosPorCategoria(categoria);
    } else {
      // sino mostrame todos los productos
      listarProductos();
    }
  }, [categoria]);

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
          <Link className="categories-items" to="/store/categoria/lamparas">
            Lámparas
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
      </div>
      <div className="store-products-section">
        <h1>Productos</h1>
        <div className="store-products-container">
          {listadoProductos && listadoProductos.length > 0 ? (
            // si listado productos tiene un valor valido haceme el map
            listadoProductos.map((producto) => {
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
          )}
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
