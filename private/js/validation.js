const nombre = document.getElementById('nameUser');
const email = document.getElementById('email');
const msg = document.getElementById('message');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');
const parrafoSend = document.getElementById('send');

form.addEventListener('submit', e=>{
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  parrafo.innerHTML = "";
  if(nombre.value.length <= 1){
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if(!regexEmail.test(email.value)){
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if(msg.value.length <= 2){
    warnings += `Porfavor escribe un mensaje correcto <br>`;
    entrar = true;
  }
  if(entrar){
    parrafo.style.color = "red";
    parrafo.style.fontSize = "17px";
    parrafo.innerHTML = warnings;
  }else{
    parrafo.style.color = "green";
    parrafo.style.fontSize = "17px";
    parrafo.innerHTML = "Tu mensaje ha sido enviado con exito!";
  }
});