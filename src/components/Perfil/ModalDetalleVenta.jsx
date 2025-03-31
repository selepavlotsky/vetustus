import React from 'react'
import { CloseIcon } from '../IconLibrary/IconLibrary'

export const ModalDetalleVenta = ({ toggleModal, id }) => {

    return (

        <div id='modalDetalleVenta'>
            <div className="contenedor-modal">
                <CloseIcon className={"close-icon"} onClick={toggleModal} />
                <h3>Detalle de venta</h3>
                <hr />

                <p>Info VENTA / COMPRA</p>
            </div>
        </div>
    )
}
