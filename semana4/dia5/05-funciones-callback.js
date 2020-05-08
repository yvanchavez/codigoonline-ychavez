let areaCirculo = (radio) => {
    let cuadrado = (numero) => {
        return numero * numero;
    }

    let rpta = 3.14 * cuadrado(radio);
    return rpta;
}

let area = areaCirculo(25);
console.log(area);