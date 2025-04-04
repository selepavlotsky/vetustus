import { useEffect } from "react";
import { useSaleContext } from "../../../context/SaleContext";
import "./UserPurchase.scss";

const UserPurchase = ({ toggleModal }) => {
  const { listarHistorialComprasCliente, comprasCliente } = useSaleContext();

  useEffect(() => {
    listarHistorialComprasCliente();
  }, []); // renderizar historial de compras

  return (
    <>
      {comprasCliente.map((compra) => (
        <tr>
          <td>#{compra._id}</td>
          <td>fecha</td>
          <td>tipo de envio</td>
          <td>metodo de pago</td>
          <td>${compra.total}</td>
          <td>
            <button className="ver-detalle" onClick={() => toggleModal(compra)}>
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
      ))}
    </>
  );
};

export default UserPurchase;
