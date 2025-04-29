import React from "react";

const FilaTablaProducto = ({
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
        <button>Editar</button>
      </td>
      <td>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default FilaTablaProducto;
