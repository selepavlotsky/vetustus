import React from "react";
import { NavLink } from "react-router";

const FilaTablaProducto = ({
  id,
  portada,
  titulo,
  precio,
  descripcion,
  categoria,
}) => {
  return (
    <tr>
      <td>
        <img src={`/Products/${portada}`} alt="Foto del producto" />
      </td>
      <td>{titulo}</td>
      <td>{precio}</td>
      <td> {descripcion} </td>
      <td>{categoria}</td>
      <td>
        <NavLink
          to={`/panel/producto/modificar/${id}`}
          className="btn-new-product"
        >
          Editar
        </NavLink>
      </td>
      <td>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default FilaTablaProducto;
