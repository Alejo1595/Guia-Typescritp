// Funciones en JS

// Declaracion de una funcion
function multiplicar(a,b){
    return a * b;
}

// Llamado a una funcion, el resultado puede ser guardado en una varibale
let resultado = multiplicar(10, 20);
console.log(resultado);

// Alcance de las variables.
let saldo = 0;

function aumentarSaldo(valor){
    let resultado = saldo + valor;
    console.log('El valor es:', resultado);    
}


aumentarSaldo('100')

// El proebla aqui es el tipado tanto de los parametros como de las funciones