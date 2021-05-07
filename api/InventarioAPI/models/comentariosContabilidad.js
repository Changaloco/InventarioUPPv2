module.exports = (sequelize,type)=>{
    return sequelize.define('ComentariosContabilidad',{
        id_comentarioContabilidad: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        titulo: type.STRING(255),
        comentario:type.TEXT,
        id_Factura:type.INTEGER
    })
}