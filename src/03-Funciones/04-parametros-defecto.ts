function mostrarInformacion(nombre: string, apellido: string, fecha: Date = new Date()): string {
    const mensaje = `Mi nombre es: ${nombre} ${apellido} y la fecha es: ${fecha}`;
    return mensaje;
}

console.log(mostrarInformacion('Julian', 'Sanchez'));