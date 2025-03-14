import "./Store.scss";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

import CartProduct from "./CartProduct";
import { peticionListarProductos, peticionListarProductosPorCategoria } from "../../API/Productos";

const StoreProducts = () => {
  const [listadoProductos, setListadoProductos] = useState([]); // este estado lo creamos para almacenar la lista de productos que obtenemos de la API, arranca vacio.

  const { categoria } = useParams(); // extraemos el parametro categoria de la url.

  useEffect(() => {
    if (categoria) {
      // si hay categoria, obtiene los productos de esa misma categoria
      peticionListarProductosPorCategoria(categoria)
        .then((response) => {
          setListadoProductos(response.data);
        })
        .catch((err) => {
          console.log("Ha ocurrido un error: " + err);
        });
    } else {
      peticionListarProductos()
        .then((response) => {
          setListadoProductos(response.data);
          console.log(response); // sino, obtiene todos los productos
        })
        .catch((err) => {
          console.log("Ha ocurrido un error: " + err);
        });
    }
  }, [categoria]); // aca como dependencia va categoria para que se ejecute cada vez que cambia la categoria.

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
                <CartProduct
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
