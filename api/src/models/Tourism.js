const {DataTypes} = require('sequelize');

module.exports= (sequelize)=>{
    sequelize.define('tourism',{
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        dificulty:{
            type: DataTypes.INTEGER,
            validate:{
                max:5,
                min:1,
            }
        },
        duration:{
            type: DataTypes.INTEGER
        },
        season:{
            type: DataTypes.ENUM('summer', 'spring', 'autumn', 'winter')
        }
    },{
        timestamps: false
      });
};