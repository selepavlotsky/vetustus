import { createContext, useContext, useEffect, useReducer } from "react";
import {
  peticionLogin,
  peticionRegister,
  peticionVerificarTokenUsuario,
} from "../API/usuarios";
import { useNavigate } from "react-router";
import {
  ACTIONS,
  authReducer,
  initialState,
} from "../reducer/Auth/authReducer";

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("El UserContext requiere ser utilizado con UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, initialState); // se crea el estado para usar dentro del componente
  const { usuario, estaAutenticado, errors, isLoading: isLoadingUser } = state; // desestructuramos las propiedades del estado para usarlas desp

  const registerUsuario = async (usuario) => {
    dispatch({ type: ACTIONS.INIT_REQUEST });
    try {
      const response = await peticionRegister(usuario);
      dispatch({ type: ACTIONS.LOGIN_USER, payload: response.data.usuario });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: [error.response.data.message],
      });
    }
  };

  const loginUsuario = async (usuario) => {
    dispatch({ type: ACTIONS.INIT_REQUEST });
    try {
      const response = await peticionLogin(usuario);
      dispatch({ type: ACTIONS.LOGIN_USER, payload: response.data.usuario });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: [error.response.data.message],
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: ACTIONS.LOGOUT_USER });
    navigate("/");
  };

  /* VERIFICACIÓN DE LOGIN */

  async function verificarLogin() {
    dispatch({ type: ACTIONS.INIT_REQUEST });
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await peticionVerificarTokenUsuario();
        dispatch({ type: ACTIONS.LOGIN_USER, payload: response.data.usuario }); // extraemos solo el usuario de data
      } catch (error) {
        dispatch({
          type: ACTIONS.SET_ERRORS,
          payload: [error.response.data.message],
        });
      }
    } else {
      dispatch({ type: ACTIONS.RESET_STATE });
    }
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
