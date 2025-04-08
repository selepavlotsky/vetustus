import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCartContext } from "../../context/CartContext";
import { useProductsContext } from "../../context/ProductsContext";
import { PulseLoader } from "react-spinners";

const ProductDetail = () => {
  const { cart, addItem, isLoading } = useCartContext();
  const { listarDetalleProducto, detalleProducto } = useProductsContext();

  const [cantidad, setCantidad] = useState(1); // lo empezamos en 1 ya que no se podria comprar 0 productos.
  const [disponibilidad, setDisponibilidad] = useState(true);
  const [stockDisponible, setStockDisponible] = useState(null);

  function verificarStockProducto() {
    const prodEnCarrito = cart.find((prod) => prod.product == id)

    let stockActual = detalleProducto.stock

    if (prodEnCarrito) {
      if (prodEnCarrito.cantidad >= detalleProducto.stock) {
        setDisponibilidad(false);
      }
      stockActual = detalleProducto.stock - prodEnCarrito.cantidad
    }
    setStockDisponible(stockActual)
  }


  //creamos el estado para meter los datos del detalle producto cuando se obtengan de la api.
  //inicialmente es null porque aun no se cargo nada.

  const { id } = useParams();
  //accedemos al id del producto para saber que producto es

  useEffect(() => {
    listarDetalleProducto(id)
  }, [id]);

  useEffect(() => {
    if (detalleProducto) {
      verificarStockProducto();
    }
  }, [detalleProducto, cart])
  //funcion para manejar la cantidad, cuando reste o aumente
  const handleChangeCantidad = (e) => {
    // pasame el evento x parametro
    const value = parseInt(e.target.value); // obtenemos el valor del input -> lo parseamos porque desde el input se captura como string
    if (!isNaN(value) && value >= 1 && value <= detalleProducto.stock) {
      /* si el numero es valido o si es mayor o igual a 1 entonces ese valor que ingresa
    el usuario ponemelo en el estado*/
      setCantidad(value);
    } else {
      //sino, que siga siendo 1
      setCantidad(1);
    }
  };

  const agregarAlCarrito = (item) => {
    //const {cantidad, stockDisponible } = item;
    addItem(item);

  };

  return (
    <div className="product-detail-container">
      {detalleProducto && (
        <div className="product-detail">
          <img
            src={`/public/Products/${detalleProducto.portada}`}
            alt="Imagen del producto"
          />
          <div className="product-content">
            <h1>{detalleProducto.titulo}</h1>
            <p>{detalleProducto.descripcion}</p>
            <p>${detalleProducto.precio}</p>

            {
              disponibilidad &&
              <>
                <div className="stock-details">
                  <p>
                    En stock: <span>{stockDisponible}</span>
                  </p>
                  {
                    detalleProducto.stock > 0 &&
                    <input
                      type="number"
                      placeholder="1"
                      value={cantidad}
                      onChange={handleChangeCantidad}
                      min="1"
                      max={detalleProducto.stock}
                    />

                  }

                </div>


                <button
                  onClick={() => {
                    agregarAlCarrito({
                      id: detalleProducto._id,
                      stockDisponible: detalleProducto.stock,
                      cantidad: cantidad,
                      precio: detalleProducto.precio,
                    });
                  }}

                >
                  {isLoading ? <PulseLoader /> : 'Agregar al carrito'}
                </button>

              </>
            }


          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetail;
