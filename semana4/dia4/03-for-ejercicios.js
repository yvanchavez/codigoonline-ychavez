let n = +prompt("Cuantos usuarios va a ingresar?");
let personas = [];
for(let i = 0; i < n; i++){
    let usuario = [];
    usuario[0] = prompt("Ingrese su nombre");
    usuario[1] = prompt("Ingrese su apellido");
    usuario[2] = +prompt("Ingrese su edad");
    personas.push(usuario);
}

for (let i = 0; i < personas.length; i++) {
    if(personas[i][2]>=18){
        console.log(`${personas[i][0]} ${personas[i][1]} ${personas[i][2]} `);
        
    }
    
}