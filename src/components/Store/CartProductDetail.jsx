import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { peticionListarDetalleProducto } from "../../API/productos";

const CartProductDetail = () => {
  const [detalleProducto, setDetalleProducto] = useState(null);

  //creamos el estado para meter los datos del detalle producto cuando se obtengan de la api.
  //inicialmente es null porque aun no se cargo nada.

  const { id } = useParams();
  //accedemos al id del producto para saber que producto es

  useEffect(() => {
    async function listarDetalle() {
      try {
        const detalle = await peticionListarDetalleProducto(id); //detalle va a ser el producto puntual con ese id.
        setDetalleProducto(detalle); // se actualiza el estado y entonces se renderiza el componente ahora si con la informacion del producto.
      } catch (error) {
        alert(error);
      }
    }

    listarDetalle();
  }, []);
  return (
    <div className="product-detail-container">
      {detalleProducto && (
        <div className="product-detail">
          <img
            src={`/public/Products/${detalleProducto.portada}`}
            alt="Imagen del producto"
          />
          <div className="product-content">
            <h1>{detalleProducto.nombre}</h1>
            <p>{detalleProducto.descripcion}</p>
            <p>${detalleProducto.precio}</p>
            <p>
              {" "}
              En stock: <span>{detalleProducto.stock}</span>
            </p>

            <button>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProductDetail;
