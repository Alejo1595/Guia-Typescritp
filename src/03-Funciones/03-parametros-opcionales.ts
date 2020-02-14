// Parametro obligatorio
function calcularEdad(añoNacimiento: number): string {
    const respuesta = new Date().getFullYear() - añoNacimiento
    return `Tienes ${respuesta} años`
}

console.log(calcularEdad(1995));

// Parametro obligatorio
function calcularEdadInfo(añoNacimiento: number, nombre?: string): string {
    const respuesta = new Date().getFullYear() - añoNacimiento
    // Operador ternario
    const mensaje: string = (nombre) ? `${nombre} tiene ${respuesta} años` : `Tienes ${respuesta} años`;
    return mensaje
}

