import React, { useState, useEffect } from 'react'
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';

const ClienteFila = ({ cliente, numero, setObjCliente }) => {

  const [checked, setChecked] = useState(false);

  // funcion que se conecta a la BD y cambia el estado del repartidor
  const putCliente = () => {

    let nuevoCliente = { ...cliente };
   
    nuevoCliente.cli_est = !checked + "";

    const endpoint = `${URL_BACKEND}/cliente/${cliente.id}`;
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(nuevoCliente)
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);

       
        setChecked(!checked);
      })
    })
  }


  useEffect(() => {
    if (cliente.cli_est === "true") {
      setChecked(true);
    }
  }, []);


  return (
    <tr>
      <td>{numero}</td>
      <td>{cliente.id}</td>
      <td>{cliente.cli_nom}</td>
      <td>{cliente.cli_ape}</td>
      <td>
        {
          checked ?
            <span className="badge badge-success">Habilitado</span> :
            <span className="badge badge-danger">Inhabilitado</span>
        }
        <Switch
          checked={checked}
          onChange={putCliente} />

      </td>
      <td>{cliente.cli_dni}</td>
      <td>
        <button className="btn btn-info" onClick={() => {
          setObjCliente(cliente);
        }}>
          Editar
        </button>
      </td>
    </tr>
  )
}

export default ClienteFila
