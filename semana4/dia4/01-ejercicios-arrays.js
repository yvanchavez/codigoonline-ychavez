let numeros= [1,2,5,-1,0,35,0,-3,0];

let = i = 0;

let cPositivos = 0;
//let cNegativos = 0;
let cCeros = 0;



while (i<numeros.length) {
    if(numeros[i]>0){
        cPositivos++;
    }else if(numeros[i]=== 0){
        cCeros++;
    }
    
    i++;
}

console.log(`Positivos => ${cPositivos}`);
console.log(`Negativos => ${numeros.length - (cPositivos+ cCeros)}`);
console.log(`Ceros => ${cCeros}`);
