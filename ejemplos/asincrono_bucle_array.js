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

// bucle asincrono en serie
// llamar a una función con un array en serie
/**
 * 
 * @param {Array} arr 
 * @param {Function} fn 
 * @param {Function} callback 
 */
function serie(arr, fn, callback) {
    if (arr.length === 0) { //he terminado
        callback();
        return; //parar aquí
    }

    fn(`texto${arr.shift()}`, () => { //fn en este punto es escribeTras2Segundos
        serie(arr, fn, callback);
    });
}

serie([1, 2, 'tres', 4, 5], escribeTras2Segundos, function () {
    console.log('He terminado');
})

console.log('termino');