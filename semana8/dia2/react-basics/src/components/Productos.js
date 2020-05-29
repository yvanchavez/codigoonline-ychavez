import React from "react";
import Producto from "./Producto";

const Productos = (props) => {
  return (
    <section>
      {props.productos.map((prod) => {
        return (
          <Producto producto={prod} key={prod.id} aumentar={props.aumentar} 
          actualizarCarrito={props.actualizarCarrito}
          carrito={props.carrito}/>
        );
      })}
    </section>
  );
};

export default Productos;

