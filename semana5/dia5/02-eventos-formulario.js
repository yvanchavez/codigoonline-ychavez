//elemento.onchange
let nombreInput = document.getElementById('nombreInput');
let selectDistrito = document.getElementById('selectDistrito');
let enviarGatos = document.getElementById('enviarGatos');
let formulario = document.getElementById('formulario');
let menu = document.getElementById('menu');
let opcion1 = document.getElementById('opcion1');
let opcion2 = document.getElementById('opcion2');
let opcion3 = document.getElementById('opcion3');

nombreInput.onchange = (e) => {
    console.log("onchange");
    
    console.log(e);    
}

nombreInput.onfocus = (e) => {
    console.log("onfocus");
    nombreInput.style.borderRadius = "5px";
    console.log(e);
}

nombreInput.onblur = (e) => {
    console.log("onblur");
    console.log(e);
}

selectDistrito.onchange = (e) => {
    let posicion = selectDistrito.selectedIndex;
    console.log(posicion);
    
    console.log(selectDistrito.options[posicion].innerText);
    
    console.log(e.target.value);    
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    let info = {
        nombre : nombreInput.value,
        distrito : selectDistrito.value
    }
    console.log("Enviando Gatos");
    console.log(info);   
    
}

window.oncontextmenu = (e) => {
    e.preventDefault();

    menu.setAttribute('hidden','hidden');
    let x = e.clientX;
    let y = e.clientY;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.removeAttribute('hidden')

}

window.onclick = () => {
    menu.setAttribute('hidden','hidden');
}

const clickOpcion = (e) =>{
    let id = e.target.getAttribute('id');
    switch (id){
        case 'opcion1':
            console.log("click en la opcion 1");
            break;
        case 'opcion2':
                window.print();
                break;
        case 'opcion3':
                console.log("click en la opcion 3");
                break;

        default:
            break;
            
    }
}

opcion1.onclick = clickOpcion;
opcion2.onclick = clickOpcion;
opcion3.onclick = clickOpcion;
