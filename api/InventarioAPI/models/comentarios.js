module.exports = (sequelize,type)=>{
    return sequelize.define('Comentarios',{
        id_Comentario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        titulo: type.STRING(255),
        comentario:type.TEXT,
        id_Bien:type.INTEGER
    })
}