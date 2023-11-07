"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('caminando');
    }
    onomatoyepa() {
        return 'hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chanchito';
    }
    caminar() {
        console.log('caminando');
    }
    onomatoyepa() {
        return 'oink';
    }
}
class Perro {
    constructor() {
        this.name = 'Fido';
    }
    caminar() {
        console.log('caminando');
    }
    onomatoyepa() {
        return 'guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
//# sourceMappingURL=interfaces.js.map