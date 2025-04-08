const DetalleItemModal = (
  titulo,
  portada,
  descripcion,
  precio,
  subtotal,
  cantidad
) => {
  return (
    <div className="producto-detail-popup">
      <img src={`/Products/${portada}`} alt="Vodka" />

      <div>
        <p className="popup-title">{titulo}</p>
        <p className="popup-description">{descripcion}</p>
      </div>

      <p>
        Precio por unidad: <span>{precio}</span>
      </p>
      <p>
        Subtotal: <span>{subtotal}</span>
      </p>
      <p>
        Cantidad:<span> {cantidad}</span>
      </p>
    </div>
  );
};

export default DetalleItemModal;
