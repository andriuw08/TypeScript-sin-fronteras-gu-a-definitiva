// Con tsc index.ts nos crea un archivo igual al de ts pero en js
// Con el : despues de nuestra variable especifica que tipo de variable, para que no pueda ser asignado diferente en otro momento de nuestro codigo
// Con tsc -init creamos un tsconfig.ts que es para poder configurar nuestro compilador
// En el rootDir del tsconfig configuramos la direccion en la que estaran nuestros archivos ts
// outDir es en donde colocaremos todo nuestro codigo js
// noEmitOnError es para poder hacer que se detenga todo una vez salte un error
// removeComments es para que remueva los comentarios
// Una vez configurado todo esto con solo colocar tsc en la terminal nos va a hacer todos los cambios
// sourceMap genera archivos para que le pueda decir al visualcode como se va a mapear el codigo
// Con los puntitos rojos de la izquierda decimos cual sera el brakePoint de nuestro depurador
// En run debug, creamos un archivo json con node js

let mensaje: string = "Hola mundo"

console.log(mensaje)

mensaje = "chao mundo"

/** 
 * Tipos de datos en TS
 * any: cualquier tipo de dato
 * unknow
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos inferidos
*/

let extinsionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true

