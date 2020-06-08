import React, { useState, useEffect } from 'react'
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';

const PedidoFila = ({ pedido, numero, setObjPedido}) => {

  const [checked, setChecked] = useState(false);

  // funcion que se conecta a la BD y cambia el estado del repartidor
  const putPedido = () => {

    let nuevoPedido = { ...pedido };
    // Al nuevo repartidor le colocamos el estado contrario
    // al que tiene en el componente actualmente,
    // ESTO SE DA PORQUE SI NO ES TRUE, ES FALSE (dicotomico)
    // rep_est => mandamos la negacion del estado actual
    // pero l o convertimos a STRING porque es el formato del campo que estamos
    // contemplando
    nuevoPedido.ped_est = !checked + "";

    const endpoint = `${URL_BACKEND}/pedido/${pedido.id}`;
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(nuevoPedido)
    }).then((response) => {
      response.json().then((data) => {

        // AQUI NOS ASEGURAMOS DE QUE EL REPARTIDOR, HA CAMBIADO SU 
        // ESTADO EN LA BD
        // En consecuencia, ya podemos hacer el cambio de estao local
        // lo que generará un cambio visual para que el usuario
        // vea el DOM actualizado.
        setChecked(!checked);
      })
    })
  }


  useEffect(() => {
    if (pedido.ped_est === "true") {
      setChecked(true);
    }
  }, []);


  return (
    <tr>
      <td>{numero}</td>
      <td>{pedido.id}</td>
      <td>{pedido.id_pro}</td>
      <td>{pedido.id_rep}</td>
      <td>{pedido.id_cli}</td>
      <td>{pedido.ped_ini}</td>
      <td>{pedido.ped_fin}</td>

      <td>
        {
          checked ?
            <span className="badge badge-success">Habilitado</span> :
            <span className="badge badge-danger">Inhabilitado</span>
        }
        <Switch
          checked={checked}
          onChange={putPedido} />

      </td>
      <td>{pedido.ped_fech}</td>
      <td>
        <button className="btn btn-info" onClick={() => {
          setObjPedido(pedido);
        }}>
          Editar
        </button>
      </td>
    </tr>
  )
}

export default PedidoFila
