/* import axios from "./axios";

export const peticionLogin = (user) => axios.post("login", user); */

const peticionLoginUsuario = async (usuario) => {
  try {
    const response = await fetch(
      // ese envia la peticion al servidor con los datos del usuario a ver si son correctos
      "https://testingnode-hvci.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      // si la respuesta no es correcta, se muestra un error.
      throw new Error(data.message);
    }
    return data; //si estaba todo ok
  } catch (error) {
    //si el usuario ingreso datos incorrectos
    alert(error);
  }
};

export default peticionLoginUsuario;
