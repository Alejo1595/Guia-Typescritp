// Declare la funcion
function nombre_funcion(numero1, numero2) {
    var respuesta = numero1 * numero2;
    return respuesta;
}
var algo = nombre_funcion(10, 4);
// console.log(respuesta); // 40
// Funciones anonimas
var calcularEdad = function () {
};
// Funcion Flecha arrow function
/* (numero1: number, numero2: number) => {
    let respuesta: number = numero1 * numero2;
    return respuesta;
} */
// let listaDeNumeros = [1, 2, 3, 4, 5, 6];
// let sumatoria = 0;
// For
// for (let index: number = 0; index < listaDeNumeros.length; index++) {
//     // sumatoria = sumatoria + listaDeNumeros[index];
//     sumatoria += listaDeNumeros[index];
// }
// console.log(sumatoria);
// foreach 
/* listaDeNumeros.forEach((item) => {
    if (item === 2) {
        sumatoria += item * 2
    }
})
 */
// console.log(sumatoria);
// const objPersona = {
//     nombre: 'Julian',
//     nota: 20       
// }
// console.log(objPersona.nombre);
var suma = 0;
var arrayDeObjetos = [
    { nombre: 'julian', nota: 20 },
    { nombre: 'Alejandro', nota: 25 },
    { nombre: 'johan', nota: 50 }
];
// console.log(arrayDeObjetos);
arrayDeObjetos.forEach(function (item, indice) {
    // suma += item.nota
    console.log(indice + 1 + "." + item.nombre + " y su nota es: " + item.nota);
});
console.log(suma);
arrayDeObjetos.map((function (item) {
    suma += item.nota;
}));
var listaDeNumeros = [1, 2, 3, 4, 5, 6];
/* let resulr = listaDeNumeros.reduce((vp, va) => va += vp);
console.log('resulr');
console.log(resulr); */
/* let arr = arrayDeObjetos.reduce((vp, va) => {
    if (vp !== undefined) {
        if (vp.nota > va.nota) {
            return vp
        }
    }
}); */
/* console.log('arr');
console.log(arr); */
var filtrado = arrayDeObjetos.filter(function (item) { return item.nota < 30; });
// filtrado.forEach(item => console.log(item))
/* console.log('filtrado');
console.log(filtrado); */
for (var _i = 0, arrayDeObjetos_1 = arrayDeObjetos; _i < arrayDeObjetos_1.length; _i++) {
    var item = arrayDeObjetos_1[_i];
    console.log(item);
}
arrayDeObjetos.forEach(function (item, indice) {
    // suma += item.nota
    console.log(indice + 1 + "." + item.nombre + " y su nota es: " + item.nota);
});
var userComplete = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
            lat: "-43.9509",
            lng: "-34.4618"
        }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
    }
};
var userFiltrado = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette"
};
