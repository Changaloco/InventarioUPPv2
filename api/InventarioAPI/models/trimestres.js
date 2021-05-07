module.exports = (sequelize,type)=>{
    return sequelize.define('Trimestres',{
        id_Trimestre: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        ejercicio: type.STRING,
        fechaInicio:type.DATE,
        fechaFin:type.DATE,
        numeroTrimestre:type.INTEGER

    })
}