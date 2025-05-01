import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import { useParams } from "react-router";

const FormModificarProducto = () => {
  const { id } = useParams();
  const { listarDetalleProducto, detalleProducto, errors } =
    useProductsContext(); // accedemos al contexto
  const [formValues, setFormValues] = useState({
    //estado del formulario con todos sus valores
    titulo: "",
    portada: "",
    stock: 0,
    precio: 0,
    descripcion: "",
    categoria: "",
    fecha: "",
  });

  const handleChangeStringInput = (e) => {
    //se actualiza el estado cuando el usuario escribe en el input
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evitamos que la pag se recargue
    formValues.precio = parseFloat(formValues.precio);
    formValues.stock = parseFloat(formValues.stock);
  };

  useEffect(() => {
    listarDetalleProducto(id); // traeme los datos del producto
  }, []);

  return (
    <section className="form-nuevo-producto">
      <div className="container-form-nuevo-producto wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Editar Producto</h2>

          <div className="form-grid">
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                defaultValue={detalleProducto && detalleProducto.titulo}
                className="form-control"
                type="text"
                name="titulo"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <input
                defaultValue={detalleProducto && detalleProducto.categoria}
                className="form-control"
                type="text"
                name="categoria"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Portada</label>
              <input
                defaultValue={detalleProducto && detalleProducto.portada}
                className="form-control"
                type="text"
                name="portada"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                defaultValue={detalleProducto && detalleProducto.stock}
                className="form-control"
                type="text"
                name="stock"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                defaultValue={detalleProducto && detalleProducto.precio}
                className="form-control"
                type="number"
                name="precio"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha</label>
              <input
                defaultValue={detalleProducto && detalleProducto.fecha}
                className="form-control"
                type="date"
                name="fecha"
                onChange={handleChangeStringInput}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              defaultValue={detalleProducto && detalleProducto.descripcion}
              rows={3}
              className="form-control-textarea"
              name="descripcion"
              onChange={handleChangeStringInput}
            ></textarea>
          </div>

          {errors && <p className="errors">{errors}</p>}

          <button className="btn-crear-producto">Editar</button>
        </form>
      </div>
    </section>
  );
};

export default FormModificarProducto;
