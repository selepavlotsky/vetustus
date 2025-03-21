import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { peticionListarProductoPorID } from "../../API/Productos";

const ProductDetail = () => {
  const [detalleProducto, setDetalleProducto] = useState(null);

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

export default ProductDetail;
