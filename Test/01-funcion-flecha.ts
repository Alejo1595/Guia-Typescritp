// Declare la funcion
function nombre_funcion(numero1: number, numero2: number): number {
    let respuesta: number = numero1 * numero2;
    return respuesta;
}

let algo = nombre_funcion(10, 4);
// console.log(respuesta); // 40

// Funciones anonimas
let calcularEdad = function () {
}

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

let suma: number = 0;
let arrayDeObjetos = [
    { nombre: 'julian', nota: 20 },
    { nombre: 'Alejandro', nota: 25 },
    { nombre: 'johan', nota: 50 }
]

// console.log(arrayDeObjetos);
arrayDeObjetos.forEach((item, indice) => {
    // suma += item.nota
    console.log(`${indice + 1}.${item.nombre} y su nota es: ${item.nota}`);
});

console.log(suma);

arrayDeObjetos.map(
    (item => {
        suma += item.nota
    }
    )
)
let listaDeNumeros = [1, 2, 3, 4, 5, 6];


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

let filtrado = arrayDeObjetos.filter(
    (item) => item.nota < 30);

// filtrado.forEach(item => console.log(item))


/* console.log('filtrado');
console.log(filtrado); */

for (const item of arrayDeObjetos) {
    console.log(item);
}

arrayDeObjetos.forEach((item, indice) => {
    // suma += item.nota
    console.log(`${indice + 1}.${item.nombre} y su nota es: ${item.nota}`);
});


const userComplete = {
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
}



const userFiltrado: UsuarioClass = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
}


interface Usuario {
    id,
    name,
    username,
}


interface UsuarioClass {
    id,
    name,
    username,
}