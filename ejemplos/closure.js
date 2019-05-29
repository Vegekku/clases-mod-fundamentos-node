'use strict';

// un closure es el contexto externo en donde CREAMOS una función, NO donde la ejecutamos

function creaAgente(nombre) {
    let edad = 0;
    return {
        getNombre: function () { // esta función siempre, siempre, donde esté, podrá acceder a nombre y edad
            return nombre; // su contexto superior es la función creaAgente
        },
        setNombre(valor) {
            nombre = valor;
        },
        saluda: function () {
            console.log(`Hola soy ${nombre}`);
        }
    }
}

const jones = creaAgente('Jones');

console.log(jones);

setTimeout(jones.saluda, 2000);