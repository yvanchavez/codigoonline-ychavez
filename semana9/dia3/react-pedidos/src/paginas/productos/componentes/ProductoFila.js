import React, { useState, useEffect } from 'react'
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';

const ProductoFila = ({ producto, numero, setObjProducto }) => {

  const [checked, setChecked] = useState(false);

  // funcion que se conecta a la BD y cambia el estado del repartidor
  const putProducto = () => {

    let nuevoProducto = { ...producto };
   
    nuevoProducto.pro_est = !checked + "";

    const endpoint = `${URL_BACKEND}/producto/${producto.id}`;
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(nuevoProducto)
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);

       
        setChecked(!checked);
      })
    })
  }


  useEffect(() => {
    if (producto.pro_est === "true") {
      setChecked(true);
    }
  }, []);


  return (
    <tr>
      <td>{numero}</td>
      <td>{producto.id}</td>
      <td>{producto.pro_nom}</td>
      <td>{producto.pro_prec}</td>
      <td>
        {
          checked ?
            <span className="badge badge-success">Habilitado</span> :
            <span className="badge badge-danger">Inhabilitado</span>
        }
        <Switch
          checked={checked}
          onChange={putProducto} />

      </td>
      
      <td ><img src={producto.pro_img} alt="" width="200px" height="200px"/></td>
      <td>
        <button className="btn btn-info" onClick={() => {
          setObjProducto(producto);
        }}>
          Editar
        </button>
      </td>
    </tr>
  )
}

export default ProductoFila
