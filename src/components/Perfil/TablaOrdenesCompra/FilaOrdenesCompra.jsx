import React from 'react'
import { useSaleContext } from '../../../context/SaleContext'

export const FilaOrdenesCompra = ({ id, fecha, total }) => {
    const { listarDetalleCompra,toggleModalSaleDetail } = useSaleContext();
    const handleClick = () => {
        listarDetalleCompra(id)
        toggleModalSaleDetail();
    }
    return (
        <tr>
            <td>#{id}</td>
            <td>{fecha}</td>
            <td>${total}</td>
            <td>
                <button className="ver-detalle" onClick={handleClick}>
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
    )
}
