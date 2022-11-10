const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    id_letters:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continet:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    area:{
      type:DataTypes.FLOAT,
      allowNull:false
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  },{
    timestamps: false
  });
};
