import React from "react";
import { Link } from "react-router";
import "./SuccessfulPurchase.scss";

const SuccessfulPurchase = () => {
  return (
    <div className="confirmation-container">
      <h2>¡Compra Exitosa!</h2>
      <p>Gracias por tu compra. Hemos recibido tu pedido correctamente.</p>
      <p>En breve recibirás un correo con los detalles de tu compra.</p>

      <div className="order-summary">
        <h3>Resumen de la Orden</h3>
        <p>
          <strong>Número de orden:</strong> #12345
        </p>
        <p>
          <strong>Total pagado:</strong> $12,500
        </p>
        <p>
          <strong>Método de pago:</strong> Tarjeta de crédito
        </p>
      </div>

      <div className="buttons">
        <Link to="/store" className="btn">
          Seguir Comprando
        </Link>
        <Link to="/perfil" className="btn btn-secondary">
          Ver Mis Compras
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPurchase;
