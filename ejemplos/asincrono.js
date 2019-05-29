'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
    console.log(`paso de ti ${texto}`);
}

escribeTras2Segundos('texto1', function () { // y cuando termines haz esto
    console.log('ahora si he terminado');
    escribeTras2Segundos('texto2', function () {
        console.log('yo he terminado ahora');
    })
});

console.log('termino');