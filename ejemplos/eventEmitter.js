'use strict';

const Events = require('events');

// creamos un emisor de eventos
const emisor = new Events();

emisor.on('llamada telefono', (quien) => {
    if (quien === 'Mi madre') {
        return;
    }
    console.log('ring ring');
});

emisor.once('llamada telefono', () => {
    console.log('brr brr');
});

emisor.emit('llamada telefono', 'Mi madre');
emisor.emit('llamada telefono');