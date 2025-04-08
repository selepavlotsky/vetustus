import React, { useEffect } from "react";
import { CloseIcon } from "../../IconLibrary/IconLibrary";
import { useSaleContext } from "../../../context/SaleContext";
import DetalleItemModal from "./DetalleItemModal/DetalleItemModal";
import "./ModalDetalleVenta.scss";

export const ModalDetalleVenta = () => {
  const { toggleModalSaleDetail, detalleCompra } = useSaleContext();

  return (
    <div id="modalDetalleVenta">
      <div className="contenedor-modal">
        <CloseIcon className={"close-icon"} onClick={toggleModalSaleDetail} />
        <h3>Detalle de venta</h3>
        <hr />
        <p>Info VENTA / COMPRA</p>
        {detalleCompra &&
          detalleCompra.map((detalle) => {
            return (
              <DetalleItemModal
                titulo={detalle.titulo}
                portada={detalle.portada}
                descripcion={detalle.descripcion}
                precio={detalle.precio}
                subtotal={detalle.subtotal}
                cantidad={detalle.cantidad}
              />
            );
          })}
      </div>
    </div>
  );
};
