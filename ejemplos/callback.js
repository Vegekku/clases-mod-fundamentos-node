'use strict';

function suma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

suma(3, 5, function (resultado) {
    console.log(resultado);
});