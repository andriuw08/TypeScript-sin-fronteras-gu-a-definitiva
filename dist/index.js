"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
}
Personaje.equipo = 0;
const personaje = new Personaje(1, 'Andriuw', 1, 100);
personaje.cambiarHp(-10);
personaje.hp = 20;
const personaje1 = new Personaje(2, 'Chanchito', 1, 100);
Personaje.agregarPersonaje();
console.log(personaje, personaje1);
console.log(Personaje.getEquipo());
console.log(personaje);
console.log(personaje.hp);
//# sourceMappingURL=index.js.map