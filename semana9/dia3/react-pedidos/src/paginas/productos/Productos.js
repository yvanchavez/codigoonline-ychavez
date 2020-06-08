import React, { useState, useEffect, Fragment } from 'react'
import Cargando from './../../componentes/Cargando';
import ProductosTabla from './componentes/ProductosTabla';
import ProductoForm from './componentes/ProductoForm';
const Productos = () => {

  const endpoint = "https://5ec8650b155c130016a909e3.mockapi.io/producto";
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

 
  const [objProducto, setObjProducto] = useState(null);

  const getProductos = () => {
    if (!cargando) {
      setCargando(true);
    }

    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        setCargando(false);        
        setProductos(data);
      })
    })
  }

  useEffect(() => {
    getProductos();
  }, [])

  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-8">
          
          <ProductoForm
            getProductos={getProductos}
            objProducto={objProducto}
            setObjProducto={setObjProducto}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            cargando === true ?
              <Cargando tipo="info" texto="Cargando Productos" /> :
              <ProductosTabla
                productos={productos}
                setObjProducto={setObjProducto}
              />
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Productos