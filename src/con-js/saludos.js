/**
 * 
 * @param {*} mensaje 
 * @returns {string}
 */

// aplica reglas de ts, hace que el param no nos obligue a poner el tipo, ya que js no lo permite, pero es la manera de decirle
// y el return hace que tenga un valor de retorno

export function holaMundo(mensaje) {
    console.log(`Hola mundo! ${mensaje}`)

    return mensaje
}