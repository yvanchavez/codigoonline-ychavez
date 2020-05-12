let inputColor = document.getElementById("inputColor");
let formColor = document.getElementById("formColor");
let body = document.querySelector("body");

formColor.onsubmit = (e) => {
    //impedir que la pagina se recargue o envie datos
    e.preventDefault();
    let color = inputColor.value;
    localStorage.setItem("color",color);
    body.style.backgroundColor = color;
    
}

const verificarStorage = () =>{
    let colorGuardado = localStorage.getItem("color");
    if(colorGuardado){
        body.style.backgroundColor = colorGuardado;
    }
    
}

verificarStorage();