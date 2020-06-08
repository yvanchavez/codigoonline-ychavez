import React, { useState, useEffect, Fragment } from 'react'
import Cargando from './../../componentes/Cargando';
import ClientesTabla from './componentes/ClientesTabla';
import ClienteForm from './componentes/ClienteForm';
const Clientes = () => {

  const endpoint = "https://5ec8650b155c130016a909e3.mockapi.io/cliente";
  const [cargando, setCargando] = useState(true);
  const [clientes, setClientes] = useState([]);

 
  const [objCliente, setObjCliente] = useState(null);

  const getClientes = () => {
    if (!cargando) {
      setCargando(true);
    }

    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        setCargando(false);        
        setClientes(data);
      })
    })
  }

  useEffect(() => {
    getClientes();
  }, [])

  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-8">
          
          <ClienteForm
            getClientes={getClientes}
            objCliente={objCliente}
            setObjCliente={setObjCliente}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            cargando === true ?
              <Cargando tipo="info" texto="Cargando Clientes" /> :
              <ClientesTabla
                clientes={clientes}
                setObjCliente={setObjCliente}
              />
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Clientes
