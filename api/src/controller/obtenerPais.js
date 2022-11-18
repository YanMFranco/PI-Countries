const axios = require('axios');
const url = "https://restcountries.com/v3.1/all"
const { Country, Tourism } = require("../db");

const obtenerPais = async (name) => {
    try {
        const paisesApi = axios.get(url);
        const paisesRes = await paisesApi.then((response) => (response.data));
        const paisesInfo = paisesRes.map(info => {
            return {
                id: info.cca3,
                id_letters: info.altSpellings != null ? info.altSpellings[0] : "No data",
                name: info.name.common,
                image: info.flags.png,
                continet: info.continents[0],
                subregion: info.subregion != null ? info.subregion : "No data",
                capital: info.capital != null ? info.capital[0] : "No data",
                area: info.area,
                population: info.population,
            }
        });

        const db = await Country.findAll({ include: [{ model: Tourism }] });

        if (!db.length) {
            const newCountry = [...paisesInfo, ...db];
            await Country.bulkCreate(newCountry);
            return await Country.findAll({ include: [{ model: Tourism }] });
        }

        if(!name){
            return db;
        }else{
            const busqueda = await Country.findAll({where:{name: name}, include: [{ model: Tourism }]});
            if(!busqueda.length){
                return {"Error":"Pais no encontrado"};
            }else{
                return busqueda;
            }
        }


    } catch (error) {
        console.log(error);
    }
}

module.exports = obtenerPais;