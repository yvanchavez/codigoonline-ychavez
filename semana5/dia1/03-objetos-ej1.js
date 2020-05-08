let productos = [
  {
    id: 1,
    nombre: "Laptop Gamer",
    foto: "url",
    categoria: "Laptop",
    precio: 7000.0,
  },
  {
    id: 2,
    nombre: "Mouse Razer",
    foto: "url",
    categoria: "Accesorios",
    precio: 200.0,
  },
  {
    id: 3,
    nombre: "Webcam Logitech",
    foto: "url",
    categoria: "Accesorios",
    precio: 120.0,
  },
  {
    id: 4,
    nombre: "Cooler para laptop",
    foto: "url",
    categoria: "Accesorios",
    precio: 100.0,
  },
];

/**
 * Funcion que imprime todos los productos
 * @param {*} arreglo Arreglo de productos
 * @param {*} precio Precio del filtro
 */
const imprimirPreciosMayores = (arreglo, precio) => {
  console.log(`Productos mayores a ${precio}`);

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].precio > precio) {
      console.log(arreglo[i]);
    }
  }
};

imprimirPreciosMayores(productos, 500);
