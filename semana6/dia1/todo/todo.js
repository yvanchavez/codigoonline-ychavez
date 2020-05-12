let inputTarea = document.getElementById("inputTarea");
let btnAgregar = document.getElementById("btnAgregar");
let listaTareas = document.getElementById("listaTareas");
let tareas = [];

const dibujarTareas= () =>{
    listaTareas.innerText = "";
    tareas.forEach( t=>{
    let li = document.createElement("li");
    li.setAttribute("class","main__item");
    let span = document.createElement("span");
    span.setAttribute("class","main__tarea");
    span.innerText = t.tarea;
    let boton = document.createElement("button");
    boton.setAttribute("class","main__eliminar");
    boton.innerText = "Eliminar"

    li.appendChild(span);
    li.appendChild(boton);
    listaTareas.appendChild(li);
    })

    inputTarea.focus();
}

inputTarea.onkeyup = e => {
    if(e.keyCode === 13){
        btnAgregar.onclick();
    }
    
}

btnAgregar.onclick = () =>{
    let objTarea = {
        tarea : inputTarea.value
    }
    tareas.push(objTarea);
    dibujarTareas(); 
}

