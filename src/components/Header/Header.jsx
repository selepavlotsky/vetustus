import "./Header.scss";
import VetustusLogo from "../../assets/logo.png";
import NavBar from "../NavBar/NavBar";
import ProductSearchBar from "../ProductSearchBar/ProductSearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { NavLink } from "react-router";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const { estaAutenticado, logout } = useUserContext();
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

          <ProductSearchBar />

          <div className="cart-actions-details">
            <ShoppingCart />
            <div className="actions-container">
              {estaAutenticado ? (
                <>
                  <NavLink to="/perfil"> Perfil </NavLink>
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
