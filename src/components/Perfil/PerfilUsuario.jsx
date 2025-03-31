import React, { useState } from "react";
import "./Perfil.scss";
import "./ModalDetalleVenta.scss";
import { ModalDetalleVenta } from "./ModalDetalleVenta";

const Perfil = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

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
            <tr>
              <td>#12345</td>
              <td>15/03/2025 13:45hs</td>
              <td>Envío a domicilio</td>
              <td>Tarjeta de crédito</td>
              <td>$12,500</td>
              <td>
                <button
                  className="ver-detalle"
                  onClick={toggleModal}
                >
                  <svg
                    className="icono"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        showModal && <ModalDetalleVenta toggleModal={toggleModal} id={32} />
      }

    </>
  );
};

export default Perfil;
