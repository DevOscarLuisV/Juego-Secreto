//ctrl + f y escribo lo que quiero buscar
let numeroSecreto = 0;
let intentos=0;
//el numero sorteado queda guardado
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroDeUsuario === numeroSecreto){
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
        //abreviacion de if else , el : se utiliza para abrerviar "si no" de esa  manera no colocamos else if
        asignarTextoElemento(`p` , `acertaste , en  ${intentos} ${(intentos === 1) ? `intento` : `intentos`}`);
    } else {
       if (numeroDeUsuario > numeroSecreto){
       asignarTextoElemento(`p` , `el numero es menor`);
        } else {
    asignarTextoElemento(`p` , `el numero es mayor`); 
    }
    intentos++;
    limpiarCaja();
   
    }
    return; 
}

function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value =``;
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya se sorteo todo los numeros
if(listaNumeroSorteado.length == numeroMaximo){
asignarTextoElemento(`p`,`ya se sortearo todos los numeros posibles, para vover a jugar reinicie la pagina.`);
}else{

    //si el numero esta en la lista
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumeroSorteado.push(numeroGenerado)
        // listaNumeroSorteado.forEach(numeros => {
        //     console.log('numero generado' + numeros)
        // });
        console.log(numeroGenerado);
        console.log(listaNumeroSorteado);
        return numeroGenerado;

         }
    }

}

function condicionesIniciales(){
    asignarTextoElemento(`h1` ,  `Juego del numero secreto`);
    asignarTextoElemento(`p` ,  `Elige un numero del 1 al ${numeroMaximo}`);
    //crear numero secreto
    numeroSecreto = generarNumeroSecreto();
    //recrear el numero de intentos
    intentos = 1;
}

function reiniciarJuego(){
    //vaciar caja
    limpiarCaja();
    //volver a mostrar mensajes iniciales
    condicionesIniciales();
    //desabilitar el boton de reinicio hatas que el usuario gane
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

condicionesIniciales();


