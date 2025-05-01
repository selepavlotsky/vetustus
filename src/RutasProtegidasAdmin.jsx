import { Navigate, Outlet } from "react-router";
import { useUserContext } from "./context/UserContext";

export const RutasProtegidasAdmin = () => {
  const { estaAutenticado, isLoadingAuth, usuario } = useUserContext();
  
  if (!isLoadingAuth) {
    // si ya terminó de cargar la información del usuario

    if (!estaAutenticado) {
      // si no está autenticado redireccioname al login
      return <Navigate to="/usuario/login" replace />;
    }
    if (usuario.rol != "admin") {
      //si esta autenticado pero no es admin redireccioname al home
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />; //si esta autenticado y tambien es admin entonces puede acceder al panel de administracion
};
