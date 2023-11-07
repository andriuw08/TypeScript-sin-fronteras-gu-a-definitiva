"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
    return b;
}
log('dato', 'chanchito');
log('dato', 42);
log('24', 55);
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = fetchData('/usuarios');
        user.then;
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const pogramador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('hola mundo');
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id del producto',
        value: 500
    };
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'user_id', name: 'Felipe' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const estadoUsuarios = new EstadoUsuarios();
const calendar = { id: 1, fuente: 'Google', dueno: 'yo' };
function getProps(objeto, property) {
    return objeto[property];
}
getProps(calendar, 'id');
getProps(calendar, 'fuente');
const keyVal = {
    'soy un string': 42
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 1,
    y: 2,
};
//# sourceMappingURL=genericos.js.map