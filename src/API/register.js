/* import axios from "./axios"; 

export const peticionRegistro = (user) => axios.post('registro', user);

*/

// funcion para registrar usuario y enviar sus datos al servidor.
const peticionRegistrarUsuario = async (usuario) => {
  // intenta hacer la peticion
  try {
    const response = await fetch(
      "https://testingnode-hvci.onrender.com/api/registro",
      {
        method: "POST", // de tipo post para enviar datos al servidor.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario), // se convierte en cadena con el metodo JSON para enviar al servidor
      }
    );
    const data = await response.json(); // se obtiene la respuesta del servidor

    if (!response.ok) {
      // si la respuesta es falsa, no es corrcta, se muestra un error.
      throw new Error(data.message);
    }

    return data; // si la respuesta es correcta, entonces mostramela
  } catch (error) {
    // si en algun momento dentro el try hay errores los mostramos aca.
    alert(error);
    return error;
  }
};

export default peticionRegistrarUsuario;
