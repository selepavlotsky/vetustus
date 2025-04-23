import React from "react";
import "./ProductSearchBar.scss";

const ProductSearchBar = ({ busqueda, updateBusqueda }) => {
  const handleChangeBusqueda = (e) => {
    const term = e.target.value.toLowerCase();
    updateBusqueda(term);
  };
  return (
    <div className="product-search-container">
      <input
        type="text"
        placeholder="Buscar en Vetustus"
        onChange={handleChangeBusqueda}
        className="form-control"
        id="inputBusqueda"
        value={busqueda}
      />
    </div>
  );
};

export default ProductSearchBar;
