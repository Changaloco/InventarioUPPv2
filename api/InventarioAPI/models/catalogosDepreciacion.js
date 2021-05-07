module.exports = (sequelize,type)=>{
    return sequelize.define('CatalogosDepreciacion',{
        id_CatalogoDepreciacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        concepto: type.STRING,
        vidaUtil: type.INTEGER,
        porcentajeDepreciacionAnuall:type.DECIMAL(10,2),
        porcentajeDepreciacionMensual:type.DECIMAL(10,2)

    })
}