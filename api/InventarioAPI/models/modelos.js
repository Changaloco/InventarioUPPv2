module.exports = (sequelize,type)=>{
    return sequelize.define('Modelos',{
        id_Modelo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        marca: type.STRING(1234),
        submarca:type.STRING(1234),
        modelo:type.STRING(1234)
    })
}