import React, { useEffect } from "react";
import { CloseIcon } from "../../IconLibrary/IconLibrary";
import { useSaleContext } from "../../../context/SaleContext";
import DetalleItemModal from "./DetalleItemModal/DetalleItemModal";
import "./ModalDetalleVenta.scss";

export const ModalDetalleVenta = () => {
  const { toggleModalSaleDetail, detalleCompra, loadingDetailSale } = useSaleContext();

  useEffect(() => {
    document.body.style.overflowY = 'clip';

    /* 
      PARA EJECUTAR UNA INSTRUCCIÓN O UN CONJUNTO DE ELLAS CUANDO SE 'DESMONTA' EL COMPONENTE, DEBEMOS EJECUTAR UNA FUNCIÓN DENTRO DEL RETURN DEL CALLBACK useEffect().
    */
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, [])
  return (
    <div id="modalDetalleVenta">
      <div className="contenedor-modal">
        <CloseIcon className={"close-icon"} onClick={toggleModalSaleDetail} />
        <h3>Detalle de venta</h3>
        <hr />
        {
          loadingDetailSale ?
            <p>Cargando..</p>
            :

            detalleCompra &&

            detalleCompra.map((detalle) => {
              return (
                <DetalleItemModal
                  key={detalle._id}
                  titulo={detalle.product.titulo}
                  portada={detalle.product.portada}
                  descripcion={detalle.product.descripcion}
                  precio={detalle.product.precio}
                  subtotal={detalle.product.precio * detalle.cantidad}
                  cantidad={detalle.cantidad}
                />
              );

            })
        }
      </div>
    </div>
  );
};
