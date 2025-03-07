import "./Store.scss";
import { Link } from "react-router";

const Categories = () => {
  return (
    <div className="categories-container">
      <h1>Categorías</h1>
      <div className="categories-details">
        <Link className="categories-items" to="/store">
          Todas las categorías
        </Link>
        <Link className="categories-items" to="/mesasdeluz">
          Mesitas de luz
        </Link>
        <Link className="categories-items" to="/sillas">
          Sillas
        </Link>
        <Link className="categories-items" to="/lamparas">
          Lámparas
        </Link>
        <Link className="categories-items" to="/radios">
          Radios
        </Link>
        <Link className="categories-items" to="/telefonos">
          Teléfonos
        </Link>
        <Link className="categories-items" to="/otros">
          Otros
        </Link>
      </div>
    </div>
  );
};

export default Categories;
