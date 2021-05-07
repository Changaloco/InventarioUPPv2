module.exports = (sequelize,type)=>{
    return sequelize.define('Areas',{
        id_Area: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreArea: type.STRING(255),
        ubicacionArea:type.TEXT
    })
}