module.exports = (sequelize,type)=>{
    return sequelize.define('Departamentos',{
        id_Departamento: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreDepartamento: type.STRING(255),
        ubicacionDepartamento:type.TEXT
    })
}