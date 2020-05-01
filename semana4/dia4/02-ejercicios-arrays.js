let n = +prompt("¿Cuántas notas va ingresar joven?");
let i = 0;
let acumulado = 0;

while (i<n) {
    let x = +prompt(`Ingrese la nota ${i+1}`);
    acumulado = acumulado + x;
    
    i++;
}

console.log(`Promedio de notas => ${acumulado/n}`);
