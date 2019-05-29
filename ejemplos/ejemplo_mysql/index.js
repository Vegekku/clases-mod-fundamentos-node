'use strict';

// cargar el driver
const Mysql = require('mysql');

// crear una conexión
const conexion = Mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// conectar
conexion.connect();

// hacer una consulta a la base de datos
conexion.query('SELECT * FROM agentess', (error, filas, campos) => {
    if (error) {
        console.log('Error: ', error);
        process.exit(1);
    }

    console.log(filas);
    //conexion.end();
});

conexion.end();