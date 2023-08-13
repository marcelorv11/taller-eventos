// Función para mostrar la alerta
function mostrarAlerta() {
    alert("Hola!");
}

// Obtener el div
var divConBoton = document.querySelector('.div-con-boton');

// Asociar el manejador de clic al div
divConBoton.addEventListener('click', function() {
    alert("Hola! Soy el div");
});