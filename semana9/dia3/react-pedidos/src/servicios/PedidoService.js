import { URL_BACKEND } from './../variables/variables';
export class PedidoService {
 endpoint = "/pedido";
 /**
  * Funcion que trae toooooooodos los repartidores
  */
 getAllPedidos() {
  return new Promise((resolve, reject) => {
   fetch(`${URL_BACKEND}${this.endpoint}`)
    .then((response) => {
     response.json().then((pedidos) => {
      resolve(pedidos);
     })
    })
  })
 }

}