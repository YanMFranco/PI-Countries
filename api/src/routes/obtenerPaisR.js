const { Router } = require('express');
const obtenerById = require('../controller/obtenerById');
const obtenerPais = require('../controller/obtenerPais');

const router = Router();

router.get('/countries', async (req, res) => {
    try {
        const { name } = req.query;
        const busqueda = await obtenerPais(name);
        res.status(200).send(busqueda);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/countries/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const paisId = await obtenerById(id);
        res.status(200).send(paisId);
    }catch (error){
        res.status(400).send(error.message);
    }
})

module.exports = router;