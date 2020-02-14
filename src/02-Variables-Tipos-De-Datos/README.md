# variables y tipos de variables

## Variables

Las variables son espacios reservados en la memoria que, como su nombre indica, pueden cambiar de contenido a lo largo de la ejecución de un programa.

Para declarar una varibale en Typescript se usa la siguiente estructura:

```
let nombre_variable:tipo;
```

Para inicializar una variable se puede hacer se las siguientes formas:

1. Declarar e inicializar por separado

```
let nombre_variable:tipo;
nombre = valor de la variable;
```

2. Declarar e inicializar en la misma linea

```
let nombre_variable:tipo =  valor de la variable;
```

## Constantes

Las constantes son espacios reservados en la memoria que, como su nombre indica, NO pueden cambiar de contenido a lo largo de la ejecución de un programa.

Para declarar una constantes en Typescript se usa la siguiente estructura:

```
const frameWork: string = 'Angular';
```

## Tipos de datos basicos

Un tipo es una estructura de datos.

Es un concepto que define:

- Qué objeto estamos tratando.
- Que valores puede tomar (Dominio).
- Que operaciones se puede efectuar sobre el mismo.

Todos los lenguajes de programación contienen estructuras de datos, pero estas pueden diferir de un lenguaje a otro.

Los tipos de datos primitivos en Typescript son:

* number.
* string.
* boolean.

Los tipos object son:

* Objectos
* arrays.
* tuplas

Nota: El comando para poner en escucha el compilador de typescrpt es:

```
tsc --watch ruta del archivo
```

Para salir del modo de compilacion se usa la combinacion de teclas:

```
control + c
```

### Booleanos

Tipo de dato que representa dos valores **True** o **False**.

Ejemplo 

```
let puedeSalir: boolean = false;
```

El valor de una variable de tipo boolean tambien puede ser definido por medio de  una condicion logica,

Ejemplo

```
let edad = 20;
let mayorDeEdad = edad > 18;
console.log(mayorDeEdad);

// Respuesta: true
```

En este tipo de datos en comúm asociarlos con los operadores logicos y aritmeticos

* && (and)
* || (or)
* ==  (igualdad sin tipo)
* === (igualdad con tipo)
* != (desigualdad sin tipo)
* !== (desigualdad con tipo)
* < (menor que)
* \> (mayor que)
* <= (menor igual que)
* \>= (mayor igual que)
* % (modulo)

### Numericos

Tipo de dato que representa valores numericos tanto enteros como decimales.

Ejemplo:

```
var miNota1 = 3.5;
var miNota2 = 4;
console.log(miNota1 + miNota2);
```

### String

Conjunto de caracteres. Es recomendable usar los template string.

Ejemplo:

```
let peliculaFavorita: string = 'Avengers End Game';
let cancionFavorita: string = 'Dragon Ball Rap';

let resultado = `Mi pelicula favorita es: ${peliculaFavorita} y mi cancion favorita es: ${cancionFavorita}`;

console.log(resultado);
```

### Arrays

Coleccion de tipos. Un array se compone de: un **elemento** y un **indice**.

* Elemento: Item del array.
* Indice: Posicion de un elemento.

Se puede declarar un array de dos formas

```
let alumnos: string[] = ['Julian', 'Johan', 'Camilo'];
let notas: Array<number> = [4.5, 5, 3.5]
```

Para poder acceder a un elemento del array se hace por medio de su indice.

Ejemplo:

Impresion total de los elementos de un array:

```
let lista: string[] = ['Julian', 'Johan', 'Camilo'];
console.log(lista);
```

Impresion de un elemento en particular de un array:

```
let lista: string[] = ['Julian', 'Johan', 'Camilo'];
console.log(lista[0]);
```

### Tuplas

Es una lista ordenada de elementos que tiene un orden el cual de respetarse.

Ejemplo: 

```
let vector1: [number, number] = [10, 20];
let vector2: [number, number] = [80, 20];
let result: [number, number] = [vector1[0] + vector2[0], vector1[1] + vector2[1]];
console.log(result);
```

### Any

Es un tipo de dato que acepta cualquier tipo de valor, es de vital ayuda cuando se trabaja on codigo de terceros, como librerias y no sabemos como es el modelo dela informacion que maneja.

Ejemplo

```
let algo: any;

console.log(algo);
algo = 20;
console.log(algo);
algo = 'Kratos';
console.log(algo);
algo = 2 > 5;
console.log(algo);
algo = [2,3,'algo', true];
console.log(algo);

```