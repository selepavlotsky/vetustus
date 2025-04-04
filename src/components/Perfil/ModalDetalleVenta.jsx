import React from 'react'
import { CloseIcon } from '../IconLibrary/IconLibrary'
import { useSaleContext } from '../../context/SaleContext';

export const ModalDetalleVenta = () => {
    const { listarDetalleVenta,toggleModalSaleDetail } = useSaleContext();
    
    return (

        <div id='modalDetalleVenta'>
            <div className="contenedor-modal">
                <CloseIcon className={"close-icon"} onClick={toggleModalSaleDetail} />
                <h3>Detalle de venta</h3>
                <hr />

                <p>Info VENTA / COMPRA</p>
            </div>
        </div>
    )
}
