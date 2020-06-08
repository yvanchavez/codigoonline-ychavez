import React, { useState, useEffect } from 'react'
import { RepartidorService } from '../../../servicios/RepartidorService';
import { ClienteService } from '../../../servicios/ClienteService';
import { ProductoService } from '../../../servicios/ProductosService';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';


const formularioVacio = {
  id_pro: "",
  id_rep: "",
  id_cli: "",
  ped_ini: "",
  ped_fin: "",
  ped_est: "",
  ped_fech: ""  
}

const PedidoForm = ({getPedidos, objPedido, setObjPedido }) => {

  

  const [formulario, setFormulario] = useState(formularioVacio);
  const [repartidores, setRepartidores] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  let repService = new RepartidorService();
  let cliService = new ClienteService();
  let prodService = new ProductoService();

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (objPedido) {
      setFormulario(objPedido);
    } else {
      setFormulario(formularioVacio)
    }
  }, [objPedido])

  const llenarSelects = async () => {

    setRepartidores(await repService.getAllRepartidores());
    setClientes(await cliService.getAllClientes());
    setProductos(await prodService.getAllProductos());

    // let arrayRepartidores = await repService.getAllRepartidores();
    // setRepartidores(arrayRepartidores);
    // let arrayClientes = await cliService.getAllClientes();
    // setClientes(arrayClientes);
    // let arrayProductos = await prodService.getAllProductos()
    // setProductos(arrayProductos);
  }

  useEffect(() => {

    llenarSelects();

  }, []);

  const postPedido = (nuevoPedido) => {
    const endpoint = `${URL_BACKEND}/pedido`;
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(nuevoPedido),
      headers: {
        "Content-type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        Swal.fire({
          title: 'Éxito!',
          icon: 'success',
          text: 'El Repartidor ha sido creado con éxito en la base de datos',
          timer: 2000,
        });
        //getPedido();
      })
    })
  }
// Funcion que actualiza un repartidor en la BD
const putPedido = (nuevoPedido) => {
  const endpoint = `${URL_BACKEND}/pedido/${objPedido.id}`;
  fetch(endpoint, {
    method: 'PUT',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(nuevoPedido)
  }).then((response) => {
    response.json().then((data) => {
      Swal.fire({
        title: "Actualizado!",
        text: "Registro actualizado correctamente",
        icon: "success",
        timer: 1500
      });
      // limpiar el form
      //getPedidos();
      setObjPedido(null);
    })
  })
}
  const enviarFormulario = (e) => {
    e.preventDefault()
    
    
    if (formulario.id_pro.trim() === "" ||
      formulario.id_rep.trim() === "" ||
      formulario.id_cli.trim() === "" ||
      formulario.ped_ini.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Cuidado!",
        text: "Todos los campos deben estar llenos"
      });
    } else {
      if (objPedido) {
        // tengo editar el registro
        // LLAMADA A LA API CON EL VERBO PUT (fetch)
        Swal.fire({
          title: '¿Seguro que desea editar el registro?',
          icon: 'info',
          text: 'Los cambios harán efecto de inmediato en la base de datos',
          showCancelButton: true
        }).then((result) => {
          if (result.value) {
            console.log("OK PODEMOS EDITAR AL Pedido");
            putPedido(formulario);
          }
        })
      } else {
        // tengo crear el registro
        Swal.fire({
          title: '¿Seguro que desea crear el registro?',
          icon: 'info',
          text: 'Los cambios harán efecto de inmediato en la base de datos',
          showCancelButton: true
        }).then((result) => {
          if (result.value) {
            console.log("OK PODEMOS CREAR AL USUARIO");
            // stuff PARA CREAR AL USUARIO
            // aqui hacemos un POST  a mockapi
            postPedido(formulario);
          }
        })
      }
    }
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Formulario de Pedidos</h3>
          </div>
          <div className="card-body">
            <form className="row" onSubmit={enviarFormulario}>
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Producto</label>
                <select name="id_pro"
                  onChange={handleChange} value={formulario.id_pro}
                  id="" className="form-control">
                  {
                    productos.map((producto) => {
                      return (<option value={producto.id} key={producto.id}>
                        {producto.pro_nom} S/.{producto.pro_prec}
                      </option>)
                    })
                  }
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Repartidor</label>
                <select name="id_rep"
                  onChange={handleChange} value={formulario.id_rep}
                  id="" className="form-control">

                  {
                    repartidores.map((repartidor) => {
                      return (<option value={repartidor.id} key={repartidor.id}>
                        {repartidor.rep_nom} {repartidor.rep_ape}
                      </option>)
                    })
                  }


                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Cliente</label>
                <select name="id_cli"
                  onChange={handleChange}
                  value={formulario.id_cli}
                  id="" className="form-control">
                  {
                    clientes.map((cliente) => {
                      return (<option value={cliente.id} key={cliente.id}>
                        {cliente.cli_nom} {cliente.cli_ape}
                      </option>)
                    })
                  }
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Entrega Inicio</label>
                <input type="text" name="ped_ini"
                  onChange={handleChange} value={formulario.ped_ini}
                  className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Entrega Fin</label>
                <input type="text" name="ped_fin"
                  onChange={handleChange} value={formulario.ped_fin}
                  className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Estado</label>
                <select name="ped_est" onChange={handleChange}
                  id="" className="form-control" value={formulario.ped_est}>
                  <option value="">Seleccione</option>
                  <option value="">Pedido</option>
                  <option value="">realizado</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Fecha</label>
                <input type="date" name="ped_fech"
                  onChange={handleChange} value={formulario.ped_fech}
                  className="form-control" />
              </div>
              <div className="form-group col-md-6">
                {
                  objPedido ?
                    <button className="btn btn-success btn-block" type="submit">
                      Actualizar Pedido
                </button> :
                    <button className="btn btn-primary btn-block" type="submit">
                      Crear Pedido
                </button>
                }
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-danger btn-block" type="button">
                  Cancelar
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}


export default PedidoForm
