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

class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        public created_at: Date,
        public created_by: number,
    ) {}

    get fullYear() {
        return this.created_at.getFullYear()
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
console.log(producto1, categoria)
