module.exports = (sequelize,type)=>{
    return sequelize.define('ClasificacionesConac',{
        id_clasificacionConac: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: type.STRING(1234),
        grupoBienes:type.STRING(1234),
        subcategoria:type.STRING(1234),
        categoria: type.STRING(1234),
        descripcion: type.TEXT  
    })
}