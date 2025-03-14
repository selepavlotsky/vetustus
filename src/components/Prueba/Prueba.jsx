import { peticionCrearProducto } from "../../API/Productos";

const Prueba = () => {
  const crearProducto = async () => {
    try {
      let response = await peticionCrearProducto({
        nombre: "prueba",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }
  };
  return (
    <div>
      <button onClick={crearProducto}>Crear</button>
    </div>
  );
};

export default Prueba;
