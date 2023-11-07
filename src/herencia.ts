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

class DatosBasicos {
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
}

let producto1 = new Producto(100, 1, 'iPhone', 'este es un smartphone', new Date(), 1)

let categoria = new Categoria('Celulares', '', new Date, 1)

categoria.agregarProducto(producto1)
console.log(producto1.fullDesc, categoria)
