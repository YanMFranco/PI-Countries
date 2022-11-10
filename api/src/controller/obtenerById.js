const { Country, Tourism } = require("../db");

const obtenerById = async(id) =>{
    const db = await Country.findByPk((id),{ include: [{ model: Tourism }] });
    return db;
};

module.exports=obtenerById;