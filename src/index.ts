// Con tsc index.ts nos crea un archivo igual al de ts pero en js
// Con el : despues de nuestra variable especifica que tipo de variable, para que no pueda ser asignado diferente en otro momento de nuestro codigo
// Con tsc -init creamos un tsconfig.ts que es para poder configurar nuestro compilador
// En el rootDir del tsconfig configuramos la direccion en la que estaran nuestros archivos ts
// outDir es en donde colocaremos todo nuestro codigo js
// noEmitOnError es para poder hacer que se detenga todo una vez salte un error
// removeComments es para que remueva los comentarios
// Una vez configurado todo esto con solo colocar tsc en la terminal nos va a hacer todos los cambios

let mensaje: string = "Hola mundo"
