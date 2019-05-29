# NodeApi

## Configuraciones de arranque

Para inicializar el proyecto:
```shell
npm install
```

Para inicializar la base de datos:

Este comando borrará la base de datos actual y cargará sus datos.
Revisa `nodeapi/lib/connectMongoose.js` para comprobar a que base de datos conecta.

```shell
npm run install-db
```

Para arrancar el proyecto usar:

* En producción:
    ```shell
    npm start
    ```
* En desarrollo
    ```shell
    npm run dev
    ```

Default ->
"dev": "DEBUG=nodeapi:* npm start"

Cualquier Sistema Operativo por el puerto 3001
"dev": "cross-env PORT=3001 DEBUG=nodeapi:* npm start"

Cualquier Sistema Operativo mediante nodemon
"dev": "cross-env DEBUG=nodeapi:* nodemon"