'use strict';

const Async = require('async');

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
    console.log(`paso de ti ${texto}`);
}

Async.concat([1, 2, 'tres', 4, 5], escribeTras2Segundos, (err, resultados) => {
    if (err) {
        console.error('Hubo un error: ' + err);
        return;
    }
    console.log('termino');
});

Async.concatSeries([1, 2, 'tres', 4, 5], escribeTras2Segundos, (err, resultados) => {
    if (err) {
        console.error('Hubo un error: ' + err);
        return;
    }
    console.log('termino');
});