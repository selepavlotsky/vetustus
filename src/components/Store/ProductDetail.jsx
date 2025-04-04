import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { peticionListarProductoPorID } from "../../API/Productos";
import { useCartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const { cart, addItem, totalCart } = useCartContext();
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1); // lo empezamos en 1 ya que no se podria comprar 0 productos.

  //creamos el estado para meter los datos del detalle producto cuando se obtengan de la api.
  //inicialmente es null porque aun no se cargo nada.

  const { id } = useParams();
  //accedemos al id del producto para saber que producto es

  useEffect(() => {
    async function listarDetalle() {
      try {
        const response = await peticionListarProductoPorID(id); //detalle va a ser el producto puntual con ese id.
        setDetalleProducto(response.data); // se actualiza el estado y entonces se renderiza el componente ahora si con la informacion del producto.
      } catch (error) {
        alert(error);
      }
    }

    listarDetalle();
  }, []);

  //funcion para manejar la cantidad, cuando reste o aumente
  const handleChangeCantidad = (e) => {
    // pasame el evento x parametro
    const value = e.target.value; // obtenemos el valor del input
    if (!isNaN(value) && value >= 1) {
      /* si el numero es valido o si es mayor o igual a 1 entonces ese valor que ingresa
    el usuario ponemelo en el estado*/
      setCantidad(value);
    } else {
      //sino, que siga siendo 1
      setCantidad(1);
    }
  };

  const agregarAlCarrito = (item) => {
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
            <div className="stock-details">
              <p>
                {" "}
                En stock: <span>{detalleProducto.stock}</span>
              </p>
              <input
                type="number"
                placeholder="1"
                value={cantidad}
                onChange={handleChangeCantidad}
                min="1"
                max={detalleProducto.stock}
              />
            </div>

            <button
              onClick={() => {
                agregarAlCarrito({
                  id: detalleProducto._id,
                  cantidad: 1,
                  precio: detalleProducto.precio,
                });
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
