// Funciones en typescript

// Declaracion de una funcion
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Llamado a una funcion, el resultado puede ser guardado en una varibale
let respuesta = multiplicar(10, 20);
console.log(respuesta);

// Alcance de las variables.
let saldo = 0;

function aumentarSaldo(valor: number) {
    let resultado = saldo + valor;
    console.log('El valor es:', resultado);
}


aumentarSaldo(100)