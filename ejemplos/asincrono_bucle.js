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

// bucle en paralelo
for (let index = 0; index < 5; index++) {
    escribeTras2Segundos(`textoParalelo${index}`, function () { // y cuando termines haz esto
        console.log(`textoParalelo${index} ha terminado`);
    });
}

// bucle asincrono en serie
// llamar a una función n veces en serie
function serie(n, fn, callback) {
    if (n === 0) { //he terminado
        callback();
        return; //parar aquí
    }

    fn(`texto${n}`, () => { //fn en este punto es escribeTras2Segundos
        serie(n, fn, callback);
    });
    n--;
}

serie(5, escribeTras2Segundos, function () {
    console.log('He terminado');
})

console.log('termino');