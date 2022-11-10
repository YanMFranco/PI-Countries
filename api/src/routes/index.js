const { Router } = require('express');
const express = require('express')
const obtenerPaisR = require('./obtenerPaisR');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', obtenerPaisR);


module.exports = router;
