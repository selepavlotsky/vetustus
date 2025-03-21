import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";
import {
  peticionLogin,
  peticionRegister,
  peticionVerificarTokenUsuario,
} from "../API/usuarios";

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("El UserContext requiere ser utilizado con UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [errors, setErrors] = useState([]);

  const registerUsuario = async (usuario) => {
    try {
      const response = await peticionRegister(usuario);
      setUsuario(response.data);
      setEstaAutenticado(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const loginUsuario = async (usuario) => {
    try {
      const response = await peticionLogin(usuario);
      setUsuario(response.data);
      setEstaAutenticado(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token"); //eliminamos la cookie llamada token que guardaba la info del usuario.
    setEstaAutenticado(false); // el usuario ya no está autenticado
    setUsuario(null); // limpiamos la informacion del usuario
  };

  /* VERIFICACIÓN DE LOGIN */

  //  cookie -> fragmento de datos que un sitio web guarda en el navegador del usuario.
  async function verificarLogin() {
    const cookies = Cookies.get(); // obtiene las cookies del navegador
    if (cookies.token) {
      // si existe la cookie token entonces el usuario esta activo
      try {
        const response = await peticionVerificarTokenUsuario(); // si el token es valido
        setUsuario(response.data); // se guarda la info en el estado usuario
        setEstaAutenticado(true); //entonces esta autenticado
        console.log("Usuario verificado desde el back.");
      } catch (error) {
        //sino
        setUsuario(null);
        setEstaAutenticado(false);
        console.log("Usuario denegado desde el back.");
      }
    } else {
      setUsuario(null); // limpiado el estado del usuario, no hay usuario ingresado
      setEstaAutenticado(false); // no esta autenticado
      console.log("Usuario denegado desde el front.");
    }
  }

  return (
    <UserContext.Provider
      value={{
        usuario,
        estaAutenticado,
        errors,
        loginUsuario,
        logout,
        registerUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
