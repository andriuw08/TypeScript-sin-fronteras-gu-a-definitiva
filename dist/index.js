"use strict";
let mensaje = "Hola mundo";
console.log(mensaje);
mensaje = "chao mundo";
let extinsionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let animales = ['chanchito', 'feliz', 'felipe'];
let nums = [1, 2, 3];
let checks = [];
let num2 = [];
let tupla = [1, 'chanchito feliz'];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Chica;
const estado = 2;
const objeto = { id: 1 };
const objeto2 = { id: 1, nombre: 'Hola mundo' };
const objeto3 = {
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.Mediana
};
function validaEdad(edad) {
    if (edad > 17) {
        return 'puedes ingresar';
    }
    return 'no puedes pasar';
}
//# sourceMappingURL=index.js.map