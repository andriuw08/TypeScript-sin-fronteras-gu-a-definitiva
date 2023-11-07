function log<T> (a: string, b: T):  T { // Con el <T> es para que podamos pasar cualquier tipo de valor, siendo este llamado en donde se llama la clase
    console.log(a, b)
    return b // Asi nos va a retornar el tipo de dato el cual sea T
}

// Se pueden pasar mas genericos, simplemente separados por , -> <T, V> <string, number>

log<string>('dato', 'chanchito') // en el <> estamos especificando de que tipo de dato sera T, estos son datos genericos
log<number>('dato', 42)

log('24', 55) // Si no declaramos el generico nuestro codigo igualmente lo va a identificar 

// ejemplo vida real

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main() {
    const user = fetchData<User>('/usuarios') 
    user.then
}

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T> {
    computador: T
    constructor(t: T) {
        this.computador = t
    }
}

const pogramador = new Programador<Computador>({encender: () => {}, apagar: () => {} })
const programador1 = new Programador<string>('hola mundo')


interface KeyValue<T, V> {
    key: T,
    value: V
}

interface Product {
    id: string
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id del producto',
        value: 500
    }
}

interface Usuario {
    id: string
    name: string
}

function print<T extends Usuario>(t: T): T { // -> Hace que el tipo de dato el cual le vamos a pasar tenga la misma forma que usuario 
    console.log(t)
    return t
}

print({ id: 'user_id', name: 'Felipe' })

class Estado<T> {
    protected data: T[] = []

    agregar(t: T): void {
        this.data.push(t)
    }

    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T> { // Esto se llama pasar un generico, cada que pasemos el tipo en estado generico le llegara a la clase padre
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id)
    }
} // pasar genericos con restricciones

class EstadoUsuarios<T> extends Estado <Usuario> { // Pasar genericos fijos
    reiniciarContrasenas() {

    }
}

const estadoUsuarios = new EstadoUsuarios()
