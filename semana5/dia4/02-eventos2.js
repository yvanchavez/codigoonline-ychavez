// let seccion1 = document.getElementById('seccion1');

/* seccion1.onmousemove = (e) => {
    console.log(`Mouse X => ${e.offsetX}, Mouse Y => ${e.offsetY}` );
    
} */

let body = document.querySelector("body");
body.onmousemove = (e) => {
  console.log(`Mouse X => ${e.offsetX}, Mouse Y => ${e.offsetY}`);
  const div = document.createElement('div');
  div.style.width = '5px';
  div.style.height = '5px';
  div.style.backgroundColor="red";
  div.style.position = "absolute";
  div.style.top = e.offsetY+"px";
  div.style.left = e.offsetX+"px";
  body.appendChild(div);
}; 


/* let inputNombre = document.getElementById('nombre');
let contador = document.getElementById('contador')
let quedan = document.getElementById('quedan');


inputNombre.onkeyup = (e) =>{
    // console.log(e.key);
    //console.log(inputNombre.value);
    let texto = inputNombre.value;
    contador.innerText = texto.length + "caracteres";
    //contador.innerText = texto;
    quedan.innerText = `Quedan ${15 - texto.length} caracteres`; 
} */


formulario.onmouseover = e =>{
  formulario.style.boxShadow = "#888 0px 0px 10px";
}

formulario.onmouseleave = e =>{
  formulario.style.boxShadow = "none";
}