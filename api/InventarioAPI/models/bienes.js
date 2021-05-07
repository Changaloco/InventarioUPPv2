module.exports = (sequelize,type)=>{
    return sequelize.define('Bienes',{
        id_Bien: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreBien:type.STRING,
        descripcionBien:type.TEXT,
        claveControl:type.STRING,
        numeroInventarioAnterior:type.STRING,
        numeroInventarioArmonizado:type.STRING,
        clasificacionAdicional:type.STRING,
        numeroSerie:type.STRING,
        fotografiaBien:type.STRING,
        fechaAlta:type.DATE,
        estatusBien:type.STRING,
        etiquetaBien:type.STRING,
        tratamientoAdministrativo:type.STRING,
        numeroResguardo:type.STRING,
        costoBien:type.DECIMAL(10,2),
        costoContable:type.DECIMAL(10,2),
        tipoBien:type.STRING,
        motivoBaja:type.TEXT,
        fechaBaja:type.DATE,
        montoDepreciacio:type.DECIMAL(10,2),
        mesesDepreciacion:type.DECIMAL(10,2),
        id_clasificacionConac:type.INTEGER,
        id_Proyecto:type.INTEGER,
        id_Departamento:type.INTEGER,
        id_catalogoDepreciacion:type.INTEGER,
        id_Modelo:type.INTEGER
    })
}