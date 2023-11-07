// Los modulos e spara tener nuestro codigo dividido en diferentes carpetas
// Estas clases no se pueden usar en otros archivos, por lo que cada una de las clases deben de ir en archivos diferentes

// class Point {
//     constructor( 
//         public x: number,
//         public y: number,
//     ) {}
// }

import { Point } from './Point' // utilizar {} es para export nombrado
import Group from './Group'  // Sin las {} es por el export default

const point = new Point(1, 2)
const group = new Group(1, 'Andriuw')

console.log(point, group)