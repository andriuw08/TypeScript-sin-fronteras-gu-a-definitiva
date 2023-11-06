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

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let num2: Array<number> = [] // -> esta es la manera correcta de declarar un arreglo en ts

// animales.map(x => x.) el autocompletado va a pasar solo los metodos que coincidan con el tipo de dato

let tupla: [number, string] = [1, 'chanchito feliz'] // asi creamos una tupla para poder tener arreglos de objetos

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Chica 

const enum LoadingState { Idle, Loading, Succes, Error } // -> Es una manera mas realista de utilizar el enum, para ver el estado de carga

const estado = LoadingState.Succes

const objeto = { id: 1 }
// objeto.nombre = 'Hola mundo' // -> Esto solo en js, para agregar uno en ts tenemos que declararlo si o si

const objeto2: {
    readonly id: number, // el readonly hace que sea solo de lescutra y no se pueda reescribir 
    nombre?: string, // El ? hace que ya no sea totalmente necesario al definir un objeto 
} = { id: 1, nombre: 'Hola mundo'}

// La manra correcta de hacerlo es darle el valor desde afuera 

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
}

const objeto3: Persona = {
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.Mediana
}