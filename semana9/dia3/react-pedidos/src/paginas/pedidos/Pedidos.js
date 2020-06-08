import React, { useState, useEffect, Fragment } from "react";
import Cargando from "./../../componentes/Cargando";
import RepartidoresTabla from "./componentes/PedidosTabla";
import PedidoForm from "./componentes/PedidoForm";
import { RepartidorService } from "../../servicios/RepartidorService";
import { ClienteService } from "../../servicios/ClienteService";
import { ProductoService } from "../../servicios/ProductosService";

const Pedidos = () => {
  const endpoint = "https://5ec8650b155c130016a909e3.mockapi.io/pedido";
  const [cargando, setCargando] = useState(true);

  const [repartidores, setRepartidores] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  const [pedidos, setPedidos] = useState([]);

  const [objPedido, setObjPedido] = useState(null);

  let repService = new RepartidorService();
  let cliService = new ClienteService();
  let prodService = new ProductoService();

  const getPedidos = () => {
    if (!cargando) {
      setCargando(true);
    }

    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        setCargando(false);
        setPedidos(data);
      });
    });
  };
  const llenarTabla = async () => {
    setRepartidores(await repService.getAllRepartidores());
    setClientes(await cliService.getAllClientes());
    setProductos(await prodService.getAllProductos());
  };

  useEffect(() => {
    getPedidos();
    llenarTabla();
  }, []);

  
  return (
    <Fragment>
      <PedidoForm 
      getPedidos={getPedidos}
      objPedido={objPedido}
      setObjPedido={setObjPedido}
      />
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          {Cargando === true ? (
            <Cargando tipo="info" texto="Cargando Pedidos" />
          ) : (
            <RepartidoresTabla pedidos={pedidos} setObjPedido={setObjPedido} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Pedidos;
