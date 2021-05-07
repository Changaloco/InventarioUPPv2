module.exports = (sequelize,type)=>{
    return sequelize.define('Facturas',{
        id_Factura: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        numeroFactura:type.STRING,
        fechaFactura:type.DATE,
        fechaRecepcion:type.DATE,
        folioFiscal:type.STRING,
        RFC:type.STRING,
        licitacion:type.STRING,
        fechaAdquisicion:type.DATE,
        seguimientoComite:type.STRING,
        modalidad:type.STRING,
        costo:type.DECIMAL(10,2),
        archivoFactura:type.STRING,
        id_Proveedor:type.INTEGER,
        id_Bien:type.INTEGER,
        id_Trimestre:type.INTEGER
    })
}