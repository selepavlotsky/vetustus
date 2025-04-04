import './TablaOrdenesCompra.scss'
import { useSaleContext } from "../../../context/SaleContext";
import { FilaOrdenesCompra } from "./FilaOrdenesCompra";


export const TablaOrdenesCompra = () => {
    // componente padre, a partir del cual vamos a renderizar las ordenes de compra (filas)
    //listar todas las ordenes
    const { comprasCliente } = useSaleContext();

    return (
        <table className="tabla-mis-compras">
            <thead>
                <tr>
                    <th>Número de orden</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>

                {
                    comprasCliente.map((compra) => {
                        return (
                            <FilaOrdenesCompra key={compra._id} id={compra._id} fecha={compra.fecha_venta} total={compra.total} />
                        )
                    })

                }

            </tbody>
        </table>
    )
}
