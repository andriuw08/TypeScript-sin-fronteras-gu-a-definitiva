/**
 * Prodcuto
 * name
 * desc
 * created_at
 * created_by
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

// noImplicitOverride en el tsConfig sirve para que nos avise cuando necesitemos colocarle el override a un getter

abstract class DatosBasicos { // las clases abstractas hacen que no podamos crear instancias de la clase, no podemos crear nuevos datos
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number,
        // private para que no pueda ser utilizada en ninguna otra parte, ni aparece
        // protected si se puede acceder a ella desde la clase y las que heresan la clase, mas no desde afuera se accede con el super 
    ) {}

    get fullYear() {
        return this.created_at.getFullYear()
    }

    get fullDesc() {
        return this.name + '' + this.desc
    }

    abstract guardar(): void; // Hace que sea un metodo que nuestras otras clase tengan que implementar si o si, pero que este puede varias
}

class Producto extends DatosBasicos { // Las clases que extienden de otra son clases derivadas
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by) // Super es el contructor padre
    }

    override get fullDesc() {
        return 'Producto ' + super.fullDesc
    }

    guardar() {
        console.log('Guarda producto')
    }
}

class Categoria extends DatosBasicos { // Las clases que extienden de otra son clases derivadas
    public productos: Producto[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by) // Super es el contructor padre
    }

    agregarProducto(producto: Producto){
        this.productos.push(producto)
    }

    guardar() {
        console.log('Guarda Categoria')
    }
}

let producto1 = new Producto(100, 1, 'iPhone', 'este es un smartphone', new Date(), 1)

let categoria = new Categoria('Celulares', '', new Date, 1)

categoria.agregarProducto(producto1)
console.log(producto1.fullDesc, categoria)
