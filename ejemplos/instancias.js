'use strict';

// creamos una función para usarla como constructor de objetos
function Fruta(nombre) {
    // this contiene el objeto que se ha creado y este constructor devolverá
    this.nombre = nombre;
}

// usamos new para crear un objeto con el constructor
const limon = new Fruta('limon');

console.log(limon);