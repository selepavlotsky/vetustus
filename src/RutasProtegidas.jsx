import { Navigate, Outlet } from "react-router";
import { useUserContext } from "./context/UserContext";

export const RutasProtegidas = () => {
  const { estaAutenticado, isLoadingUser } = useUserContext();

  // si la app termino de cargar al user.
  if (!isLoadingUser) {
    // si el usuario NO esta autenticado lo redireccionamos al login
    if (!estaAutenticado) {
      return <Navigate to="/login" replace />;
    }
  }

  return <Outlet />;
};
