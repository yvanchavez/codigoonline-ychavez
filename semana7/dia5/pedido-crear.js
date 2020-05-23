const URL_BACKEND = "https://5ec8650b155c130016a909e3.mockapi.io";
let selectRepartidor = document.getElementById("selectRepartidor");
let selectCliente = document.getElementById("selectCliente");
let selectProducto = document.getElementById("selectProducto");

//Traer los repartidores
const getRepartidores = () => {
  const dibujar = (repartidores) => {
    repartidores.forEach((repartidor) => {
      let option = document.createElement("option");
      option.innerText = `${repartidor.rep_nom} ${repartidor.rep_ape}`;
      option.value = repartidor.id;
      //option.setAttribute("value",repartidor.id)
      selectRepartidor.appendChild(option);
    });
  };

  let endpoint = `${URL_BACKEND}/repartidor`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

//Traer los clientes
const getClientes = () => {
  const dibujar = (clientes) => {
    clientes.forEach((cliente) => {
      let option = document.createElement("option");
      option.innerText = `${cliente.cli_nom} ${cliente.cli_ape}`;
      option.value = cliente.id;
      //option.setAttribute("value",cliente.id)
      selectCliente.appendChild(option);
    });
  };

  let endpoint = `${URL_BACKEND}/cliente`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

//Traer los productos
const getProductos = () => {
  const dibujar = (productos) => {
    productos.forEach((producto) => {
      let option = document.createElement("option");
      option.innerText = `${producto.pro_nom} | S/.${producto.pro_prec}`;
      option.value = producto.id;
      //option.setAttribute("value",cliente.id)
      selectProducto.appendChild(option);
    });
  };

  let endpoint = `${URL_BACKEND}/producto`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

formPedido.onsubmit = (e) => {
  e.preventDefault();

  let fecha =
    new Date().getDate() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getFullYear();

  let objPedido = {
    // En un select, la propiedad value, es el value del option seleccionado
    id_pro: selectProducto.value,
    id_rep: selectRepartidor.value,
    id_cli: selectCliente.value,
    ped_ini: inputOrigen.value,
    ped_fin: inputDestino.value,
    ped_est: "solicitado",
    ped_fech: fecha,
  };

  fetch(`${URL_BACKEND}/pedido`, {
    method: "POST",
    body: JSON.stringify(objPedido),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};

getRepartidores();
getClientes();
getProductos();