// Los modulos e spara tener nuestro codigo dividido en diferentes carpetas
// Estas clases no se pueden usar en otros archivos, por lo que cada una de las clases deben de ir en archivos diferentes

// class Point {
//     constructor( 
//         public x: number,
//         public y: number,
//     ) {}
// }

import { Point } from './Point' // utilizar {} es para export nombrado
// import Group from './Group'  // Sin las {} es por el export default
import * as G from './Group' // El * es un wildImport
import {Animales, Chanchitos, Caballos } from './Animales/index'
// Si quitamos "moduleResolution": "node10",   en el tsconfig ya no es necesario colocar la extension de los archivos
const point = new Point(1, 2)
// const group = new Group(1, 'Andriuw')
const group = new G.default(1, 'Andriuw') //  Con el G.default es la clase como tal, si quisiesemos usar alguna de los metodos de grupo usariamos la G.metodo

console.log(point, group)

console.log()