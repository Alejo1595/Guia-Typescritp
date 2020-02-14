# Typescript

## ¿Que es typescript?

Según wikipedia **typescript** es:

```
"Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript."
```

Desglosando poco a poco lo que se menciona anteriormente:

- Es un lenguaje de programación libre y de código abierto -> Es un lenguaje de programación al cual los usuarios tienen acceso al core del lenguaje para que pueda ser estudiado y/o modificado sin ninguna restricción.

- Es un superset de JavaScript -> Esto quiere decir que ademas de tomar las caracteristicas que posee javascript le añade mas funcionalidades como por ejemplo: tipos estáticos y objetos basados en clases.

Otra definicion obtenida de la pagina oficial es:

```
Typescript es: Superset de Javascript tipado que compila a Javascript
```

Desglosando lo anteriomente mencionado:

### ¿Que es un superset?

Se trata de un lenguaje escrito sobre otro pero que a su vez añade mas funcionalidades. Mientras que otros supersets de JS nos alejan del codigo original, Typescript por el contrario es muy similar a javascript y C# (debido a su creador Anders Hejlsberg, Lead Architect de C#). Todo codigo valido en Javascript es igualmente valido en Typescript.

Superset -> definicion anterior.

### Tipado

Tenemos que un tipo es una estructura de datos que se esta usando. (numeros, cadenas, booleans, etc).

Existen dos tipos de tipado:

- El tipado fuerte (Tipados): Java.
- El tipado debil (No tipados): Phyton.

En el tipado fuerte una variable declarada con un tipo no podra cambiar, mientras que en el tipado debil una variable puede iniciar con un tipo y terminar con otro.

Tipado fuerte (Java):

```
int edad = 20;
edad = 'veinte' -> No esta permitido
```

Tipado debil (Phyton):

```
edad = 20;
edad = 'veinte' -> Esta permitido
```

Las operaciones entre diferentes tipos de varibales no estan permitidas en los lenguales **fuertemente tipados**, mientras que en los lenguajes **debilmente tipados** tienen la posibididad de realizar dicha operacion.

### Compilador

Un navegador web no reconoce un archivo de Typescript, en este punto entra a lugar el concepto de compilador, es cual podemos definir como un **traductor**.

El compilador tomara las sentencias escritas en Typescript y las traducira a Javascript (por defecto a ES5 que es soportado por todos los navegadores).

## Ventajas de Typescript

- Misma sintaxis de Javascript.
- Entiende todas las caracteristicas de ES6.
- Compila en codigo Typescript y lo transforma a codigo Javascript que lo soporta el navegador.
- Promueve una mejor calidad de codigo.
- Codigo mas entendible.
- Evita errores de logica en el codigo.
- POO sencilla.
- Desarrollada por Microsoft y apoyada por Google.
- Compilado: Verifica errores antes de produccion.

## Desventajas de Typescript

- Toma mas tiempo y dedicación al momento de escribir codigo.
- Un grado mas de complejidad en nuestros proyectos.

## Instalaciones necesarias

Para poder realizar esta guia se necesita:

- Instalar Typescript:

```
npm install -g typescript
```

Pagina oficial: https://www.typescriptlang.org/#download-links

- Editor de codigo: Para este caso se usara Visual Studio code. Dependiendo el sistema operativo:

  - Windows: Descargar el ejecutable de la siguiente pagina:  
    https://www.typescriptlang.org/#download-links  
    Tener en cuenta que la opcion de la ruta **PATH** este seleccionada.

  - Linux (ubuntu): Descargar el archivo .deb de la siguiente pagina:  
    https://www.typescriptlang.org/#download-links  
    Dirigirse a la ruta de descarga y ejecutar el siguiente comando

    ```
    sudo dpkg -i nombre_del_archivo
    ```

- Instalar node: Nos permitira ejecutar codigo JS en la consola.

  - Windows: Descargar y ejecutar el .exe obtenido de la siguiente pagina:  
    https://nodejs.org/es/  
    Se puede seleccionar la version LTS (Soporte por muchos años) o la version actual.

  -Linux (Ubuntu): Existen dos formas:

  - Instalar la ultila version con los siguientes comandos:

  ```
  sudo apt-get install curl

  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

  sudo apt-get install nodejs

  node -v // verificar la version de node

  npm -v // verificar la version de npm
  ```

  - Instalar nvm para tener multiples versiones de node:

  1. Ejecutamos el siguiente comando: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash para instalar nvm.
  2. verificamos la version de nvm con el siguiente comando:  
      **nvm --version**.  
     En caso de que no reconozca el comando utilizamos el siguiente comando:  
      **source ~/.bashrc** y repetimos el comando: **nvm --version**.
  3. Instalamos la ultima version de node conel siguiente comando:  
     **nvm install node**.  
      Si se desea instalar una version mas antigual ejecutamos el siguiente comando:  
      **nvm install 6.14.4 or 10.10.0, 8.9.1, etc**

### Recomendación

Instalar git:

- Windows: Descargar y ejecutar el .exe obtenido de la siguiente pagina:  
   https://git-scm.com/

- Linux (ubuntu): Ejecutar el siguiente comando:

  ```
  sudo apt-get install git
  ```

## Ejemplo

1. Crear una carpeta que contenga el proyecto.
2. Crear un archivo llamado hola-mundo.ts.
3. Escribir la siguiente sentencia en el archivo hola-mundo.ts:

   ```
   console.log('Hola mundo)
   ```

4. Ejcutar el siguiente comando en la consola (debe estar apuntar a la carpeta del proyecto):

   ```
   tsc hola-mundo.ts
   ```

   Esto compilara nuestro codigo y generara un archivo llamado **hola-mundo-js**

5. Ejcutar el siguiente comando en la consola (debe estar apuntar a la carpeta del proyecto):

   ```
   node hola-mundo-js
   ```

   Este comando permitira ejecutar el archivo Js en la consola.

6. En la consola debera aparecer el siguiente mensaje:
   ```
   Hola mundo
   ```

## Archivo tsconfig.json

Su presencia indica que el proyecto esta usando Typescript. Ademas de ello permite perzonalizar las opciones que usa el compilador como por ejemplo:

- Indicar la version de Javascript a la que se compilara.
- Definir un directorio de produccion y desarrollo
- Incluir o excluir archivos y/o directorios

Para crear ese archivo usamos el siguiente comando:

```
tsc --init
```

### Indicar la version de Javascript a compilar

Se busca en el archivo tsconfig.json la opcion: **"target": "es5"** y se le indica la version de javascript a la que se desea compilar (es5, es6, es2017, etc). por defecto es EcmaScript en su version 5, la cual es soportada por todos los navegadores web.

### Crear una carpeta de desarrollo

Sencillamente se crear una carpeta llamada **src** la cual contendra la estructura del proyecto.

### Crear una carpeta de distribucion

Se busca en el archivo tsconfig.json la opcion: **"outDir": "./"** y la modificamos a **"outDir": "./dist"**. Este configuracion permitira que los archivos .js se guarden en dicha carpeta respetando la estructura establecida en la carpeta src.

### Inclusion y exclusion de archivos

Con esta configuracion podemos indicarle al compilador que escuche los cambios en los archivos .ts pero que no tenga en cuenta los archivos de prueba.

Para realizar la configuracion se busca en el archivo tsconfig.json el objeto llamando **compilerOptions** y debajo de el añadimos el siguiente fragmento:

```
"include": [
    "src/**/*.ts" // Le indicamos que tome todos los archivos .ts que estan en la carpeta src
  ],"exclude": [
    "src/**/*-test.ts" // Le indicamos que NO tome los archivos -prueba.ts que estan en la carpeta src
  ]
```