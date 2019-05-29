'use strict';

// constructor de objetos
function Coche(ruedas) {
    this.ruedas = ruedas;
    this.cuantasRuedas = function () {
        console.log(`Tiene ${this.ruedas} ruedas`);
    }.bind(this); // añadiendolo aquí, no habrá que preocuparse de vincularlo después
}

function Moto(ruedas) {
    this.ruedas = ruedas;
    this.cuantasRuedas = () => {
        console.log(`Tiene ${this.ruedas} ruedas`);
    }; // con arrow function, el funcionamiento es similar a bind dentro del objeto
}

const todoterreno = new Coche(4);

const pintaRuedas = todoterreno.cuantasRuedas;

// todoterreno.cuantasRuedas(); // si tiene this
pintaRuedas(); // no tiene this

// setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000); // bind crea una nueva función y me la devuelve

const suzuki = new Moto(2);
const pintaRuedas2 = suzuki.cuantasRuedas;
pintaRuedas2();