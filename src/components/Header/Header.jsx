import "./Header.scss";
import VetustusLogo from "../../assets/logo.png";
import NavBar from "../NavBar/NavBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { NavLink } from "react-router";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const { estaAutenticado, logout, usuario } = useUserContext();

  return (
    <>
      <div className="top-header-container">
        <div className="wrapper top-header-details">
          <div>
            <a href="#">
              <img
                className="main-logo"
                src={VetustusLogo}
                alt="Logo de Vetustus"
              />
            </a>
          </div>

          <div className="cart-actions-details">
            <ShoppingCart />
            <div className="actions-container">
              {estaAutenticado ? (
                <>
                  <NavLink to="/perfil"> Perfil </NavLink>
                  {usuario?.rol === "admin" && ( // agregamos el ? para preguntar primero si usuario existe, si existe vemos que rol tiene
                    <NavLink to="panel" className="enlace-menu">
                      Panel
                    </NavLink>
                  )}
                  <NavLink to="perfil" onClick={logout}>
                    Salir
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register"> Registrate </NavLink>
                  <NavLink to="/login"> Ingresá </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header-container">
        <NavBar />
      </div>
    </>
  );
};

export default Header;

//cuando hago click en perfil dentro de admin me tira el perfil de otro usuario
