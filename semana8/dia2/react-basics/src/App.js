import React ,{ Fragment, useState} from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Productos from "./components/Productos.js";
import Carrito from "./components/Carrito"

function App() {
  let miTitulo = "Tiendita.com";
  let enlaces = ["home", "Nosotros", "Proyectos"];
  let productos = [
    {
      nombre: "Producto 1",
      descripcion: "Descripcion del Producto 1",
      precio: 123.0,
      id:1
    },
    {
      nombre: "Producto 2",
      descripcion: "Descripcion del Producto 2",
      precio: 100.0,
      id:2
    },
    {
      nombre: "Producto 3",
      descripcion: "Descripcion del Producto 3",
      precio: 200.0,
      id:3
    },
    {
      nombre: "Producto 4",
      descripcion: "Descripcion del Producto 4",
      precio: 300.0,
      id:4
    },
  ];

  //Creando una variable de estado
  //y su actualizador de estado
  //const [variable,actualizarCarrito] = useState(-valor inicial de la variable-)
  const [carrito,actualizarCarrito] = useState([]);
  let contador = 0;
  const aumentar = () => {
    contador = contador+1;
  }

  

  
  return (
    <Fragment>
      <Header titulo={miTitulo} link={enlaces} />
      <main>
        <h2>Tienda</h2>
        <h3>Carrito({carrito.length}) Producto(s)</h3>
        <h3>Contador({contador})</h3>
        <hr/>
        <Productos productos={productos} aumentar={aumentar}
         actualizarCarrito={actualizarCarrito}
         carrito={carrito}/>
      </main>
      <Footer />
      <Carrito carrito={carrito} actualizarCarrito={actualizarCarrito}/>
    </Fragment>
  );
}

export default App;
