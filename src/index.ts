// // Con tsc index.ts nos crea un archivo igual al de ts pero en js
// // Con el : despues de nuestra variable especifica que tipo de variable, para que no pueda ser asignado diferente en otro momento de nuestro codigo
// // Con tsc -init creamos un tsconfig.ts que es para poder configurar nuestro compilador
// // En el rootDir del tsconfig configuramos la direccion en la que estaran nuestros archivos ts
// // outDir es en donde colocaremos todo nuestro codigo js
// // noEmitOnError es para poder hacer que se detenga todo una vez salte un error
// // removeComments es para que remueva los comentarios
// // Una vez configurado todo esto con solo colocar tsc en la terminal nos va a hacer todos los cambios
// // sourceMap genera archivos para que le pueda decir al visualcode como se va a mapear el codigo
// // Con los puntitos rojos de la izquierda decimos cual sera el brakePoint de nuestro depurador
// // En run debug, creamos un archivo json con node js
// // Con el noImplicitReturns hacemos que salte un error cada que una de nuestras funciones no retorne algo 

// let mensaje: string = "Hola mundo"

// console.log(mensaje)

// mensaje = "chao mundo"

// /** 
//  * Tipos de datos en TS
//  * any: cualquier tipo de dato
//  * unknow
//  * never
//  * arrays
//  * tuplas
//  * Enums
//  * 
//  * Tipos inferidos
// */

// let extinsionDinosaurios: number = 76_000_000
// let dinosaurioFavorito: string = "T-Rex"
// let extintos: boolean = true

// let animales: string[] = ['chanchito', 'feliz', 'felipe']
// let nums: number[] = [1, 2, 3]
// let checks: boolean[] = []
// let num2: Array<number> = [] // -> esta es la manera correcta de declarar un arreglo en ts

// // animales.map(x => x.) el autocompletado va a pasar solo los metodos que coincidan con el tipo de dato

// let tupla: [number, string] = [1, 'chanchito feliz'] // asi creamos una tupla para poder tener arreglos de objetos

// const chica = 's'
// const mediana = 'm'
// const grande = 'l'
// const extragrande = 'xl'

// // PascalCase

// enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

// const variable1 = Talla.Chica 

// const enum LoadingState { Idle, Loading, Succes, Error } // -> Es una manera mas realista de utilizar el enum, para ver el estado de carga

// const estado = LoadingState.Succes

// const objeto = { id: 1 }
// // objeto.nombre = 'Hola mundo' // -> Esto solo en js, para agregar uno en ts tenemos que declararlo si o si

// const objeto2: {
//     readonly id: number, // el readonly hace que sea solo de lescutra y no se pueda reescribir 
//     nombre?: string, // El ? hace que ya no sea totalmente necesario al definir un objeto 
// } = { id: 1, nombre: 'Hola mundo'}

// // La manra correcta de hacerlo es darle el valor desde afuera 

// type Persona = {
//     readonly id: number,
//     nombre: string,
//     talla: Talla,
// }

// const objeto3: Persona = {
//     id: 1,
//     nombre: 'Hola mundo',
//     talla: Talla.Mediana
// }

// // const fn: (a: number) => number = (edad: number) => { // -> el primer parentesis lleva los parametros y el number es el tipo de valor que va a retornar
// //     if (edad > 17) {
// //         return 'puedes pasa'
// //     }
// //     return 'no puedes pasar'
// // }

// function validaEdad(edad: number): string {
//     if(edad > 17) {
//         return 'puedes ingresar'
//     }

//     return 'no puedes pasar'
// }

// // Never funciona para las funciones que lanzan excepsiones 

// let puntaje: number | string = 98 // -> con la | asignamos varios tipos de valor, es un union type

// puntaje = 'hola mundo'

// type Animal = {
//     id: number,
//     estado: string
// }

// type Usuario = {
//     id: number,
//     name: string
// }

// let animal: Usuario | Animal = { id: 1, estado: '', name: ''} // -> otro ejemplo de union type con objetos

// function suma2 (n: number | string): number { // -> otro ejemplo con funciones
//     if(typeof n === 'number') {
//         return n + 2
//     }
//     return parseInt(n + 2)
// }

// type Audit = {
//     create_at: string,
//     modified_at: string
// }

// type Product = {
//     name: string
// }

// const product: Audit & Product = { // -> es uninterseption type, hace que sea del mismo tipo de los otros los tipos a los que se les esta asignando
//     create_at: '',
//     modified_at: '',
//     name: ''
// }

// const nDeFibo: 0 | 3 | 1| 2 | 5 = 5 // -> Literal type, podemos asignar valores especificos que queremos que sea

// function toNumber (s: string | null)  { // -> nullable
//     if(!s) {
//         return 0
//     }
//     return parseInt(s)
// }

// const n = toNumber(null)

// function getUser(id: number) {
//     if(id < 0) {
//         null
//     }
//     return {
//         id: 1,
//         name: 'Felipe',
//         created_at: new Date ()
//     }
// }

// const user = getUser(-1)

// console.log(user?.created_at) // -> ? es el chaining operator, primero antes de acceder al objeto evalua si existe, ya luego entre al valor


// // nullish coalecing operator sirve para tomar valores por defecto

// const difficulty: number | null = null

// const user2 = {
//     username: 'chanchuito feliz',
//     difficulty: difficulty ?? 1, // -> lo que esta a la izquierda de ?? es el valor que asiganamos en caso de existir, el de la derecha es el de defecto
// }

// const elem: any = null

// const elem1 = elem as number // -> as typpe asertion hace que nosotros asignemos el dato directamente que queremos que sea, sin importar si antes fue definido con otro tipo

// const input = document.getElementById('username') as HTMLInputElement // -> de esta manera le hacemos que sea de ese tipo y asi asegurar poder acceder a su value
// // es forzar a que sea de un tipo, pero no funciona para acceder al tipo de dato en caso de que anteriormente haya sido declarado con otro

// // Type narrowing sirve para poder tener dos tipos de datos en una variable

// function Lala(x:string | number) {
//     // Sirve para llevar a un tipo por un camino en particular
//     // if(typeof x === 'number') {
//     //     x.
//     // }
//             // Asi mostramos los metodos que hay segun el tipo de dato
//     // if (typeof x === 'string') {
//     //     x.
//     // }
// }

// // unknow es el remplazo de any

// POO

class Personaje {
    // readonly id: number // hace que no pueda ser reasignada en ningun momento
    // name: string
    // nivel: number
    // private _hp: number // private es para que la propiedad sea privada de la clase, ademas, del _ antes del nombre es como un acuerdo entre desarrolladores para decir que es privada0
    // profesion?: string // Con el ? hacemos que sea un atributo no necesario, es decir que podemos utilizarlo en otro momento 
    // constructor(id: number, name: string, nivel: number, hp: number) { // -> con el constructor es para inicializar los atributos y retornar la clase
    //     this.id = id
    //     this.name = name
    //     this.nivel = nivel
    //     this._hp = hp
    // }

    // Manera mas corta de definir propiedades y constructor
    profesion?: string
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private hp: number
    ) {
    }

    subirNivel(): number { // -> metodos o funciones para la clase
        this.nivel = this.nivel + 1
        return this.nivel
    }

    cambiarHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}

const personaje = new Personaje(1, 'Andriuw', 1, 100) // -> instanciacion

personaje.cambiarHp(-10)

console.log(personaje)



