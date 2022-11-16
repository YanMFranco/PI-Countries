const {Router} = require('express');
const { Tourism, Country } = require('../db.js');

const router = Router();

router.post("/activities",async(req,res)=>{
    try {
        const { name, dificulty, duration, season, id } = req.body;

        if (!name && !dificulty && !duration && !season) return res.status(400).send(JSON.stringify("FALTAN DATOS"));

        const obj = { name, dificulty, duration, season };
        const newActivity = await Tourism.create(obj);
        await newActivity.addCountry(id);
        const busqueda = await Country.findAll({where:{id: id}, include: [{ model: Tourism }]});
        res.status(200).send(console.log(busqueda));
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports= router;