import React, { useEffect, useState } from "react";
import "./PerfilUsuario.scss";
import { ModalDetalleVenta } from "../ModalDetalleVenta/ModalDetalleVenta";
import { TablaOrdenesCompra } from "../TablaOrdenesCompra/TablaOrdenesCompra";
import { useSaleContext } from "../../../context/SaleContext";

const Perfil = () => {
  const {
    listarHistorialComprasCliente,
    comprasCliente,
    loadingSale,
    showModalSaleDetail,
  } = useSaleContext();

  useEffect(() => {
    listarHistorialComprasCliente();
  }, []);
  return (
    <>
      <div className="perfil-container">
        <h2 className="nombre-usuario">Bienvenido Juan Pérez!</h2>

        <h2>Tus Compras</h2>
        {loadingSale ? (
          <p>Cargando..</p>
        ) : comprasCliente.length > 0 ? (
          <TablaOrdenesCompra />
        ) : (
          <p>Usted no posee compras realizadas.</p>
        )}
      </div>
      {showModalSaleDetail && <ModalDetalleVenta />}
    </>
  );
};

export default Perfil;
