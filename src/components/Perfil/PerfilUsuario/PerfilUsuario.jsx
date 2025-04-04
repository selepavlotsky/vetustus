import React, { useState } from "react";
import "./PerfilUsuario.scss";
import "../ModalDetalleVenta.scss";
import UserPurchase from "../UserPurchase/UserPurchase";
import { ModalDetalleVenta } from "../ModalDetalleVenta";

const Perfil = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="perfil-container">
        <h2 className="nombre-usuario">Bienvenido Juan Pérez!</h2>

        <h2>Tus Compras</h2>
        <table className="tabla-mis-compras">
          <thead>
            <tr>
              <th>Número de orden</th>
              <th>Fecha</th>
              <th>Tipo de envío</th>
              <th>Método de pago</th>
              <th>Total</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <UserPurchase toggleModal={toggleModal} />
          </tbody>
        </table>
      </div>
      {showModal && <ModalDetalleVenta toggleModal={toggleModal} id={32} />}
    </>
  );
};

export default Perfil;
