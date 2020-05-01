/*  Realice un diagrama de flujo y pseudocódigo que 
representen el algoritmo para determinar cuánto pagará 
finalmente una persona por un artículo equis, considerando 
que tiene un descuento de 20%, y debe pagar 15% de IVA 
(debe mostrar el precio con descuento y el precio final). 
 */
/* 
 let totalPagar=0;
 let producto = prompt("Ingrese el nombre del producto");
 let precio = +prompt("Ingrese el precio del producto");

//  let precioDescontado = precio - (precio*0.2);
let precioDescontado = precio*0.8;

totalPagar = precioDescontado*1.15;

console.log("***** Boleta *****");
console.log("** Producto: "+producto);
console.log("** Precio: "+precio);
console.log("** c/Dcto: "+precioDescontado);
console.log("** c/IGV: "+totalPagar);
console.log("******************"); */

/* 2.20
Realice el diagrama de flujo y pseudocódigo que 
representen el algoritmo para determinar el promedio
 que obtendrá un alumno considerando que realiza tres
  exámenes, de los cuales el primero y el segundo tienen
   una ponderación de 25%, mientras que el tercero de 50%. 
 */

 let nota1= +prompt("Ingrese 1ra nota")
 let nota2= +prompt("Ingrese 2da nota")
 let nota3= +prompt("Ingrese 3ra nota")
let promedio = nota1*0.25 + nota2*0.25+nota3*0.5;
console.log("promedio :" +promedio);








