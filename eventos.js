var miBoton = document.querySelector('button');
var divConBoton = document.querySelector('.div-con-boton');

function mostrarAlerta(event) {
    event.stopPropagation();
    alert('Hola!');
}

function mostrarAlertaDiv() {
    alert('Hola! Soy el div');
}

miBoton.addEventListener('click', mostrarAlerta);
divConBoton.addEventListener('click', mostrarAlertaDiv);    