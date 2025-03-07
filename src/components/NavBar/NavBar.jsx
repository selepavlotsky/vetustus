import { NavLink } from "react-router";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">Conocenos</NavLink>
          </li>
          <li>
            <NavLink to="/store"> Productos </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
