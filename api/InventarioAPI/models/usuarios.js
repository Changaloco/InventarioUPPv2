module.exports = (sequelize,type)=>{
    return sequelize.define('Usuarios',{
        id_Usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreUsuario:type.STRING,
        apellidoMUsuario:type.STRING,
        apellidoPUsuario:type.STRING,
        MatriculaUsuario:type.STRING,
        tipoUsuario:type.STRING,
        passwordUsuario:type.STRING,
        correoUsuario:type.STRING,
        perfilAcademicoUsuario:type.STRING,
        puestoUsuario:type.STRING,
        fotoUsuario:type.STRING,
        estatusLaboralUsuario:type.STRING,
        id_Departamento:type.INTEGER,
        id_Area:type.INTEGER

    })
}