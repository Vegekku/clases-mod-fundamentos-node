'use strict';

const axios = require('axios');

/** USANDO PROMESAS */
// consulta http a un API
axios.get('http://localhost:3000/apiv1/agentes').then( httpResponse => {
    console.log(httpResponse.data);
}).catch(err => {
    console.log('Hubo un error:', err);
});

/** PROMESAS CON ASYNC/AWAIT */
(async () => {
    const httpResponse = await axios.get('http://localhost:3000/apiv1/agentes');
    console.log(httpResponse.data);
})().catch(err => console.log(err));