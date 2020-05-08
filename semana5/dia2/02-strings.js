//Propiedades de los Strings
let frase = "Al que madruga, Dios lo ayuda";
let tamanio = frase.length;

console.log(tamanio);

//string.toLowerCase()
//Devuleve toda la cadena de texto en minusculas
let minusculas = frase.toLowerCase();
console.log(minusculas);

//string.toUpperCase()
//devuelve toda la cadena de texto en mayuscula

let mayuscula = frase.toUpperCase();
console.log(mayuscula);

//string.substr(inicio,cantidad_de_caracteres)
//devuelve una subcadena dado el indice inicial 
//y la longitud de los caracteres

let primeraParte = frase.substr(3,11);
console.log(primeraParte);

//string.substring(inicio,final)
let primeraparteV1 = frase.substring(3,14);
console.log(primeraparteV1);


let contieneMadruga = frase.includes("madruga");
console.log(contieneMadruga);

let buscarAyuda = frase.indexOf("ayuda");
console.log(buscarAyuda);

let frase2 = "Agua qUe no Has de Beber,jala la cadena y dejala Correr"
//recomendación, antes de buscar , igualar,comparar, encontrar
//tener una copia en minusculas de todo el string
let frase2m = frase2.toLowerCase();
let posicionBeber = frase2m.indexOf("BEBER".toLowerCase());
console.log(posicionBeber);

console.log(frase2[posicionBeber]);


//string.trim()
//devuelve un string sin espacions


