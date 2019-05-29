'use strict';

/**
 * Cargar datos iniciales de la base de datos
 */

 // Buena práctica: importar por coreNode, instalados y propios
 const readline = require('readline');
 const db = require('../lib/connectMongoose');
 const Agente = require('../models/Agente');
 const agentesData = require('../data/agentes.json');

 db.once('open', async () => {
    try {
        // preguntar al usuario si quiere borrar la bbdd
        const respuesta = await askUser('La base de datos será borrada, ¿Desea continuar? (Yes/No)');
        
        if (respuesta !== 'Yes') {
            console.log('Abortado');
            process.exit(0);
        }

        // await initAgentes();
        await initModel(Agente, agentesData, 'agentes');

        db.close();
    } catch (error) {
        console.log('Hubo un error,', error);
        process.exit(1);
    }
 });

 function askUser(question) {
     return new Promise((resolve, reject) => {
        const interfaz = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        interfaz.question(question, answer => {
            interfaz.close();
            resolve(answer);
            return;
        });
     });
 }

 async function initAgentes() {
     const deleted = await Agente.deleteMany();
     console.log(`Eliminados ${deleted.n} registros.`);

    const insertados = await Agente.insertMany(agentesData);
    console.log(`Insertados ${insertados.length} registros.`);
 }

 async function initModel(Model, data, modelName) {
    const deleted = await Model.deleteMany();
    console.log(`Eliminados ${deleted.n} ${modelName}.`);

   const insertados = await Model.insertMany(data);
   console.log(`Insertados ${insertados.length} ${modelName}.`);
}