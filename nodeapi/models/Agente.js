// Este es el modelo 
'use strict';

const Mongoose = require('mongoose');

// definimos esquema
const agenteSchema = Mongoose.Schema({
    name: { type: String, index: true},
    age: { type: Number, index: true },
//}, { collection: 'Agentes' }); // para especificar el nombre exacto de la colleción
});

// creamos un método estático
// los métodos deben ser creados ANTES de crear el modelo
agenteSchema.statics.listar = (filtro, skip, limit, fields, sort) => {
    const query = Agente.find(filtro);

    query.skip(skip).limit(limit).select(fields).sort(sort);
    //query.skip(skip);
    //query.limit(limit);

    return query.exec();
}
// en los métodos de instancia no usar arrow function para permitir a mogoose inyectar el this

// creamos el modelo
const Agente = Mongoose.model('Agente', agenteSchema);

//Agente.find().exec((error, agentes) => {
//    console.log(agentes);
//});

module.exports = Agente;