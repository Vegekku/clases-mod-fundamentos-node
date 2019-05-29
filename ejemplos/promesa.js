'use strict';

// función que retorna una promesa
function sleep(miliseconds) {
    return new Promise((resolve, reject) => {
        // aquí va el código que hará resolverse o recharzarse una promesa
        setTimeout(() => {
            //resolve(56);
            reject(new Error('fatal'));
        }, miliseconds);
    });
}

// consumir promesa
const promesa = sleep(2000);

console.log(promesa);

promesa.then((data) => {
    console.log('la promesa se completó con ', data);
}).catch((error) => {
    console.log('la promesa se rechazó con error:', error);
});