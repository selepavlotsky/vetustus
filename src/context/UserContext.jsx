import { createContext, useContext, useEffect, useState } from "react";
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
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [errors, setErrors] = useState([]);

  const registerUsuario = async (usuario) => {
    try {
      const response = await peticionRegister(usuario);
      setUsuario(response.data.usuario);
      localStorage.setItem("token", response.data.token);
      setEstaAutenticado(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const loginUsuario = async (usuario) => {
    try {
      const response = await peticionLogin(usuario);
      setUsuario(response.data.usuario);
      localStorage.setItem("token", response.data.token);
      setEstaAutenticado(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setEstaAutenticado(false); // el usuario ya no está autenticado
    setUsuario(null); // limpiamos la informacion del usuario
  };

  /* VERIFICACIÓN DE LOGIN */

  async function verificarLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await peticionVerificarTokenUsuario(); // si el token es valido
        setUsuario(response.data); // se guarda la info en el estado usuario
        setEstaAutenticado(true); //entonces esta autenticado
       // console.log("Usuario verificado desde el back.");
      } catch (error) {
        //sino
        setUsuario(null);
        setEstaAutenticado(false);
       // console.log("Usuario denegado desde el back.");
      }
    } else {
      setUsuario(null); // limpiado el estado del usuario, no hay usuario ingresado
      setEstaAutenticado(false); // no esta autenticado
     //console.log("Usuario denegado desde el front.");
    }
    setIsLoadingUser(false);
  }

  useEffect(() => {
    verificarLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        usuario,
        estaAutenticado,
        errors,
        isLoadingUser,
        loginUsuario,
        logout,
        registerUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
