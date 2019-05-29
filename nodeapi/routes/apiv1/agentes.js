'use strict';

const Express = require('express');
const router = Express.Router();
const Agente = require('../../models/Agente');

/**
 * GET /agentes
 * Obtener una lista de agentes
 * 
 * Documentar los parámetros que puede recibir
 */
router.get('/', async (req, res, next) => {
    try { // protegemos el código para recoger posibles excepciones
        
        // recogemos valores de entrada
        const name = req.query.name;
        const age = req.query.age;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;

        const filter = {};

        if (name) {
            filter.name = name;
        }

        if (age) {
            filter.age = age;
        }

        // buscamos algo en una base de datos
        //const agentes = await Agente.find().exec();
        const agentes = await Agente.listar(filter, skip, limit, fields, sort);

        res.json({
            success: true,
            results: agentes,
        });
    } catch (error) {
        next(error);
        return;
    }
});

/**
 * GET /agentes/id
 * Obtener un agente
 */
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const agente = await Agente.findById(id).exec();

        if (agente === null) {
            res.status(404);
        }
        
        res.json({ success: true, result: agente });
    } catch (error) {
        next(error);
        return;
    }
});

/**
 * POST /agentes
 * Crear un agente
 */
router.post('/', async (req, res, next) => {
    try {
        const data = req.body;

        const agente = new Agente(data);

        const agenteGuardado = await agente.save();

        res.json({ success: true, result: agenteGuardado});
    } catch (error) {
        next(error);
        return;
    }
});

/**
 * PUT /agentes/id
 * Actualizar un agente
 */
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;

        //const agenteActualizado = await Agente.findByIdAndUpdate(id, data).exec();
        // {new:true} solicita que retorne el documento actualizado
        //const agenteActualizado = await Agente.findByIdAndUpdate(id, data, { new: true}).exec();
        const agenteActualizado = await Agente.findOneAndUpdate({_id: id}, data, { new: true}).exec();

        res.json({ success: true, result: agenteActualizado });
    } catch (error) {
        next(error);
        return;
    }
});

/**
 * DELETE /agentes/id
 * Elimina un agente
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        await Agente.deleteMany({_id: id}).exec();
        //await Agente.findOneAndRemove();

        res.json({success: true});
    } catch (error) {
        next(error);
        return;
    }
});

// si olvidas esta linea en un fichero de rutas, fallará
module.exports = router;