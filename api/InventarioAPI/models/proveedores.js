module.exports = (sequelize,type)=>{
    return sequelize.define('Proveedores',{
        id_proveedor: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreProveedor: type.STRING,
        RFCproveedor:type.STRING,
        domicilioFiscalProveedor:type.TEXT,
        telefonoProveedor:type.STRING,
        correoProveedor:type.STRING,
        giro:type.TEXT

    })
}