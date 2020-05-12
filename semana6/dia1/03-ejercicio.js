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
let guardar = document.getElementById("inputGuardar");

let facturas = []
let detalle = [];
let total = 0;

//Funciones 

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
  
   }

   const borrarFilas = () => {
    inputNombre.value = "";
    inputRuc.value = "";
    inputFecha.value = "";
    inputNro.value = "";
    inputTotal.innerText = "";
    
    for (let i = 0; i < detalle.length+1; i++) {
        let tr = document.querySelector("tr");
        tr.remove();
        
    }
    
    
   }

//Eventos

inputPunit.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputPunit.onkeyup = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onkeyup = () =>{
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
    inputCantidad.value = "";
    inputDescripcion.value = "";
    inputPunit.value = "";
    inputPtotal.value = "";
    
    
    total += objFila.pTotal;
    console.log(total);
    
    dibujarFilas();
    inputTotal.innerText = total;
   }

guardar.onclick = () => {
    let objFactura = {
        nombre : inputNombre.value,
        ruc : inputRuc.value,
        fecha : inputFecha.value,
        nro : inputNro.value,
        total ,
        detalle 
    }

    facturas.push(objFactura)
    let facturasString = JSON.stringify(facturas);
    localStorage.setItem("facturas", facturasString);
    
    borrarFilas();
    detalle = [];
}