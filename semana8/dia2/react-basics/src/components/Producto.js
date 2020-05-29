import React from "react";

const Producto = ({ producto, aumentar, actualizarCarrito, carrito }) => {
  const agregarAlCarrito = () => {
    //aumentar();
    //creando una copia del state llamado 'carrito'
    let carritoTmp = [...carrito];

    //let arreglo = carritoTmp.filter((p) => p.id === producto.id);
    let elementoEncontrado = carritoTmp.find((p) => p.id === producto.id);
    if (elementoEncontrado) {
      console.log("El producto ya existe");
    } else {
      carritoTmp.push(producto);

      actualizarCarrito(carritoTmp);
    }
  };

  return (
    <div>
      <p>
        <strong>Nombre:</strong>
        {producto.nombre}
      </p>
      <p>
        <strong>Descripcion:</strong>
        {producto.descripcion}
      </p>
      <p>
        <strong>Precio:</strong>
        {producto.precio}
      </p>
      <p>
        <button
          onClick={() => {
            agregarAlCarrito();
          }}
        >
          Agregar al carrito
        </button>
      </p>
    </div>
  );
};

export default Producto;
