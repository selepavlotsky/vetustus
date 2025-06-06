import { useState, useEffect } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router";
import "./FormNuevoProducto.scss";

const FormNuevoProducto = () => {
  const { productoCreado, crearProducto, errors } = useProductsContext(); // accedemos al contexto
  const [formValues, setFormValues] = useState({
    //estado del formulario con todos sus valores que aun estan vacios
    titulo: "",
    portada: "",
    stock: 0,
    precio: 0,
    descripcion: "",
    categoria: "",
    fecha: "",
  });

  const navigate = useNavigate();

  const handleChangeStringInput = (e) => {
    //se actualiza el estado cuando el usuario escribe en el input
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValues.precio = parseFloat(formValues.precio);
    formValues.stock = parseFloat(formValues.stock);

    crearProducto(formValues);
  };

  useEffect(() => {
    if (productoCreado) {
      //si se creo un producto correctamente
      alert("Producto creado");
      navigate("/panel");
    }
  }, [productoCreado]);

  return (
    <section className="form-nuevo-producto">
      <div className="container-form-nuevo-producto wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Nuevo Producto</h2>

          <div className="form-grid">
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                className="form-control"
                type="text"
                name="titulo"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <input
                className="form-control"
                type="text"
                name="categoria"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Portada</label>
              <input
                className="form-control"
                type="text"
                name="portada"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                className="form-control"
                type="text"
                name="stock"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                className="form-control"
                type="number"
                name="precio"
                onChange={handleChangeStringInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha</label>
              <input
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
              rows={3}
              className="form-control-textarea"
              name="descripcion"
              onChange={handleChangeStringInput}
            ></textarea>
          </div>

          {errors && <p className="errors">{errors}</p>}

          <button className="btn-crear-producto">Crear</button>
        </form>
      </div>
    </section>
  );
};

export default FormNuevoProducto;
