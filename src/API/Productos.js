const listadoProductos = [
  {
    id: 1,
    nombre: "Silla Luis XV de madera tallada",
    descripcion:
      "Elegante silla estilo Luis XV, fabricada en madera de nogal con detalles tallados a mano y tapizado de terciopelo azul. Perfecta para coleccionistas o decoración vintage.",
    portada: "silla.jpg",
    precio: 2500,
    stock: 2,
    categoria: "Sillas",
  },
  {
    id: 2,
    nombre: "Radio Philco de baquelita (1940)",
    descripcion:
      "Radio antigua de la marca Philco, fabricada en los años 40. Cuerpo de baquelita marrón con dial iluminado y perillas originales. En excelente estado de conservación y funcionamiento.",
    portada: "radio.jpg",
    precio: 3800,
    stock: 1,
    categoria: "Radios",
  },
  {
    id: 3,
    nombre: "Reloj de péndulo de madera (Siglo XIX)",
    descripcion:
      "Hermoso reloj de pared con péndulo, de origen alemán, datado en el siglo XIX. Caja de madera tallada con detalles en bronce y mecanismo original restaurado.",
    portada: "reloj.jpg",
    precio: 5200,
    stock: 1,
    categoria: "Relojes",
  },
];

export async function peticionCrearProducto () {
  const prueba = ""
}

export async function peticionListarProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listadoProductos);
    }, 500);
  });
}

//peticion para listar productos.

export async function peticionListarDetalleProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = listadoProductos.find((product) => product.id == id);
      if (!producto) {
        reject(
          "No se ha encontrado el producto solicitado, ingrese una nueva búsqueda."
        );
      }
      resolve(producto);
    }, 500);
  });
}

//peticion para encontrar un producto, si existe con ese id resolvemos la promesa, sino avisamos del error.

export async function peticionListarProductosPorCategoria(categoria) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        listadoProductos.filter(
          (producto) =>
            producto.categoria.toLowerCase() == categoria.toLowerCase()
        )
      );
    }, 500);
  });
}

// peticion para filtrar productos por categoria
