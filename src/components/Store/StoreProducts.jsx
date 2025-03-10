import "./Store.scss";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  peticionListarProductos,
  peticionListarProductosPorCategoria,
} from "../../API/Productos";
import CartProduct from "./CartProduct";

const StoreProducts = () => {
  const [listadoProductos, setListadoProductos] = useState([]); // este estado lo creamos para almacenar la lista de productos que obtenemos de la API, arranca vacio.

  const { categoria } = useParams(); // extraemos el parametro categoria de la url.

  useEffect(() => {
    if (categoria) {
      // si hay categoria, obtiene los productos de esa misma categoria
      peticionListarProductosPorCategoria(categoria)
        .then((data) => {
          setListadoProductos(data);
        })
        .catch((err) => {
          console.log("Ha ocurrido un error: " + err);
        });
    } else {
      peticionListarProductos()
        .then((data) => {
          setListadoProductos(data); // sino, obtiene todos los productos
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
          <Link className="categories-items" to="/store/categoria/sillas">
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
          {listadoProductos && // si listado productos tiene un valor valido haceme el map
            listadoProductos.map((producto) => {
              return (
                <CartProduct
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.nombre}
                  portada={producto.portada}
                  precio={producto.precio}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
