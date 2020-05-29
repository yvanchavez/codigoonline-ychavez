import React from "react";
import "../estilos/carrito.css";

const Carrito = ({ carrito,actualizarCarrito }) => {

  const eliminarProductoDeCarrito = (id) => {
    let copiaCarrito = [...carrito];
    let productosFiltrados = copiaCarrito.filter((producto) =>producto.id !== id);

    actualizarCarrito(productosFiltrados);
    
  }

  return (
    <div className="carrito">
      {
      carrito.length === 0 ? 
      <p>No hay elementos en el carrito</p> :

      carrito.map((producto) => {
        return (
          <div key={producto.id}>
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
              <button type="button" onClick={()=>{
                eliminarProductoDeCarrito(producto.id);
                
              }}>Eliminar &times;</button>
            </p>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default Carrito;
