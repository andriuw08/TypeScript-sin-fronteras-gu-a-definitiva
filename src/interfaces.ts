type Animal = { // -> se puede utilizar interfaces o type
    name: string
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal { // -> implements se usa para interfaces o type, interfaces para las clases y type para las otras cosas
    name: string = 'Rocinante'
    caminar() {
        console.log('caminando')
    }
    onomatoyepa(): string {
        return 'hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito'
    caminar() {
        console.log('caminando')
    }
    onomatoyepa(): string {
        return 'oink'
    }
}

class Perro implements Animal {
    name: string = 'Fido'
    caminar() {
        console.log('caminando')
    }
    onomatoyepa(): string {
        return 'guau'
    }
}

class DiccionarioUsuarios {
    [id: string]: string // index signature, sirve para cuando tenemos propiedades a las cuales no podemos asignarle el tipo 
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'usuario 1'

