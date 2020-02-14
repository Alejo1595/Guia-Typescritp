"use strict";
// Parametro obligatorio
function calcularEdad(añoNacimiento) {
    var respuesta = new Date().getFullYear() - añoNacimiento;
    return "Tienes " + respuesta + " a\u00F1os";
}
console.log(calcularEdad(1995));
// Parametro obligatorio
function calcularEdadInfo(añoNacimiento, nombre) {
    var respuesta = new Date().getFullYear() - añoNacimiento;
    // Operador ternario
    var mensaje = (nombre) ? nombre + " tiene " + respuesta + " a\u00F1os" : "Tienes " + respuesta + " a\u00F1os";
    return mensaje;
}
