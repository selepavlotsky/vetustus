import { peticionCrearProducto } from "../../API/productos";

const Prueba = () => {
  const crearProducto = async () => {
    try {
      let response = await peticionCrearProducto({
        nombre: "hola",
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={crearProducto}>Crear</button>
    </div>
  );
};

export default Prueba;
