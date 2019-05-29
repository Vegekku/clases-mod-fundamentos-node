'use strict';

// definimos un constructor de objetos
function Persona(nombre) {
    this.nombre = nombre;
    // si añado aquí la función saluda, se creará la función tantas veces como haya objetos
}

// añadir el método saluda al prototipo de Persona
Persona.prototype.saluda = function () {
    console.log(`Hola, soy ${this.nombre}`);
}
Persona.prototype.despidete = function () {
    console.log(`Adios, soy ${this.nombre}`);
}

const luis = new Persona('Luis');

luis.saluda();

setTimeout(luis.saluda.bind(luis), 2000);



// Herencia de Persona ---------------------------------------

function Agente(nombre) {
    // heredar el comportamiento del constructor de las Personas
    Persona.call(this, nombre);
}

// heredar propiedades y métodos de las Personas poniendo una Persona como prototipo de los agentes
Agente.prototype = Object.create(Persona.prototype); // esto devuelve un objeto cuyo prototipo es una persona
Agente.prototype.constructor = Agente;

// Podemos sobreescribir algunos métodos
Agente.prototype.saluda = function () {
    console.log(`Agente ${this.nombre} saludando`);
}

const smith = new Agente('Smith');

smith.saluda();
smith.despidete();



// Herencia múltiple ------------------------------------------

function SuperHeroe() {
    this.vuela = function () {
        console.log(`${this.nombre} está volando!`);
    }
    this.esquivaBalas = function () {
        console.log(`${this.nombre} esquivó tu bala!`);
    }
}

// copiamos las propiedades de SuperHerore al prototipo de Agente
Object.assign(Agente.prototype, new SuperHeroe);

smith.vuela();
smith.esquivaBalas();

console.log(smith instanceof Agente);
console.log(smith instanceof Persona); // Persona es el prototipo de Agente
console.log(smith instanceof SuperHeroe); // Agente hereda de SuperHerore, pero este no es su prototipo