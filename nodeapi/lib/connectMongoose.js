'use strict';

const Mongoose = require('mongoose');

Mongoose.connection.on('error', error => {
    console.log('Error de conexión', error);
    process.exit(1);
});

Mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', Mongoose.connection.name);
});

Mongoose.set('useCreateIndex', true);

Mongoose.connect('mongodb://localhost/cursonode', { useNewUrlParser: true });

// esta linea no haría falta, pues la linea 3 devuelve un singleton, siempre que se llame, devolvería el mismo objeto
module.exports = Mongoose.connection;