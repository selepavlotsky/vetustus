import { useProductsContext } from "../../context/ProductsContext";
import { useEffect } from "react";
import { NavLink } from "react-router";
import "./Panel.scss";
import FilaTablaProducto from "../FilaTablaProducto/FilaTablaProducto";

const Panel = () => {
  const { listadoProductosAdmin, listarProductosAdmin } = useProductsContext();

  useEffect(() => {
    listarProductosAdmin();
  }, []);
  

  return (
    <div className="panel-container wrapper">
      <div className="panel-details">
        <h1>Panel de administración</h1>
        <nav className="panel-menu">
          <ul className="panel-menu-listado">
            <li>
              <NavLink className="panel-menu-enlace">Productos</NavLink>
            </li>
            <li>
              <NavLink className="panel-menu-enlace">Usuarios</NavLink>
            </li>
            <li>
              <NavLink className="panel-menu-enlace">Ventas</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3>Productos</h3>
        <button>Nuevo producto</button>
        <table className="table-products">
          <thead>
            <tr>
              <th scope="col">Portada</th>
              <th scope="col">Título</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripción</th>
              <th scope="col">Categoría</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listadoProductosAdmin.length > 0 &&
              listadoProductosAdmin.map((producto) => {
                return (
                  <FilaTablaProducto
                    key={producto._id}
                    portada={producto.portada}
                    titulo={producto.titulo}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                    categoria={producto.categoria}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Panel;
