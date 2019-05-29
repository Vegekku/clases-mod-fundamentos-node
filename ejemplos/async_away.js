'use strict';

// función que retorna una promesa
function sleep(miliseconds) {
    return new Promise((resolve, reject) => {
        // aquí va el código que hará resolverse o recharzarse una promesa
        setTimeout(() => {
            console.log(`esperando ${miliseconds}`);
            //resolve(56);
            reject(new Error('fatal'));
        }, miliseconds);
    });
}

// consumir promesa
// IIFE - Inmediatelly Invoked Function Expression
(async () => {
    console.log('empiezo');

    JSON.parse('789s789d');

    const resultado = await sleep(2000);
    console.log('resultado de await sleep(2000)', resultado);

    // si una promesa hace reject a un await, genera una excepción, como si hubiera un throw

    for(let i = 0; i < 5; i++) {
        console.log('espero 1 segundo');
        await sleep(1000);
    }

    console.log('fin');
})().catch(error => { // catch coge tanto errores sincronos como asincronos
    console.log('Hubo un error', error);
});