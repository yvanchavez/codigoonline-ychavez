let formDatos = document.getElementById("form-datos");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");

////// Trabajando con JSON /////
let persona = {
    nombre : 'Julio',
    apellido : 'Caceres'
}

console.log(persona);
//Convertir Json a formato String
let personaString = JSON.stringify(persona);
console.log(personaString);

//convertir string a formato Json
let personaJson = JSON.parse(personaString);
console.log(personaJson);
 
///////////////////////////////////

formDatos.onsubmit = (e) => {
    e.preventDefault();
    let objPersona = {
        nombre : inputNombre.value,
        apellido : inputApellido.value
    }
    console.log(objPersona);
    

    let objPersonaString = JSON.stringify(objPersona);

    localStorage.setItem("persona",objPersonaString);
}