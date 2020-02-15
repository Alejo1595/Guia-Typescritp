"use strict";
// Funciones en typescript
// Declaracion de una funcion
function multiplicar(a, b) {
    return a * b;
}
// Llamado a una funcion, el resultado puede ser guardado en una varibale
var respuesta = multiplicar(10, 20);
console.log(respuesta);
// Alcance de las variables.
var saldo = 0;
function aumentarSaldo(valor) {
    var resultado = saldo + valor;
    // console.log('El valor es:', resultado);
    return resultado;
}
var valorRespuesta = aumentarSaldo(100);
console.log(valorRespuesta);
