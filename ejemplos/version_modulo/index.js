'use strict';

const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback) {
    // __dirname devuelve la ruta al archivo que la contiene
    const fichero = path.join(__dirname, 'node_modules', nombreModulo, 'package.json');
    // console.log(fichero);
    
    fs.readFile(fichero, 'utf8', (error, data) => { // sin utf8 aparece el contenido en binario
        if (error) {
            callback(error);
            return;
        }

        let packageObject; //const para valores constantes, let para valores variables
        try {
            packageObject = JSON.parse(data); //JSON.parse es sincrono, usar try/catch
        } catch(error) {
            callback(error);
            return;
        }

        callback(null, packageObject.version);
    });
}

versionModulo('chance', (error, version) => {
    if (error) {
        console.log('Hubo un error', error);
        process.exit(1); // sin return, devuelve un error a nodemon
    }
    console.log(`La versión del módulo chance es ${version}`);
})