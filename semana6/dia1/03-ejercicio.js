let inputNombre = document.getElementById("nombre");
let inputRuc = document.getElementById("ruc");
let inputFecha = document.getElementById("fecha");
let inputNro = document.getElementById("nro");

let inputCantidad = document.getElementById("inputCantidad");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPunit = document.getElementById("inputPunit");
let inputPtotal = document.getElementById("inputPtotal");
let tbody = document.getElementById("tbody");
let inputTotal = document.getElementById("inputTotal")

let form = document.getElementById("form");

let detalle = [];
let total = 0;

const dibujarFilas = () => {
    tbody.innerHTML = "";
    detalle.forEach(f => {
        let tr= document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = f.cantidad;
        tr.appendChild(td1);
    
        let td2 = document.createElement("td");
        td2.innerText = f.descripcion;
        tr.appendChild(td2);
    
        let td3 = document.createElement("td");
        td3.innerText = f.pUnit;
        tr.appendChild(td3);
    
        let td4 = document.createElement("td");
        td4.innerText = f.pTotal;
        tr.appendChild(td4);     
    
    
        tbody.appendChild(tr);



    })
    // elemento.focus() => forza al cursor a enforcarse o ubicarse en un elemento
    // en este caso, en el input
    //inputTarea.focus();
   }

/* btnForm.onclick = (e) =>{
    e.preventDefault();
    let nombre = inputNombre.value;
    let ruc = inputRuc.value;
    let fecha = inputFecha.value;
    let nro = inputNro.value;

    let cantidad = inputCantidad.value;
    let descripcion = inputDescripcion.value;
    let pUnit = inputPunit.value;
    let pTotal = cantidad*pUnit;

    let tr= document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = cantidad;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = descripcion;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = pUnit;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = pTotal;
    tr.appendChild(td4);


    tbody.appendChild(tr);
    
    
} */

inputPunit.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

form.onsubmit = (e) => {
    e.preventDefault();
    let objFila = {
        cantidad: inputCantidad.value,
        descripcion : inputDescripcion.value,
        pUnit: inputPunit.value,
        pTotal : inputCantidad.value*inputPunit.value
    }
    console.log(objFila);
    
    detalle.push(objFila);
    // limpiando el input luego de ingresar una tarea
    inputCantidad.value = "";
    inputDescripcion.value = "";
    inputPunit.value = "";
    inputPtotal.value = "";
    
    
    total += objFila.pTotal;
    console.log(total);
    
    dibujarFilas();
    inputTotal.innerText = total;
   }