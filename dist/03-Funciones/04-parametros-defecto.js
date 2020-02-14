"use strict";
function mostrarInformacion(nombre, apellido, fecha) {
    if (fecha === void 0) { fecha = new Date(); }
    var mensaje = "Mi nombre es: " + nombre + " " + apellido + " y la fecha es: " + fecha;
    return mensaje;
}
console.log(mostrarInformacion('Julian', 'Sanchez'));
