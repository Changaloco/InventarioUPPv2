module.exports = (sequelize,type)=>{
    return sequelize.define('Usuarios',{
        id_Usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombreUsuario:{
            type:type.STRING
        },
        apellidoMUsuario:{
            type:type.STRING
        },
        apellidoPUsuario:{
            type:type.STRING
        },
        MatriculaUsuario:{
            type:type.STRING
        },
        tipoUsuario:{
            type:type.STRING
        },
        passwordUsuario:{
            type:type.STRING
        },
        correoUsuario:{
            type:type.STRING
        },
        perfilAcademicoUsuario:{
            type:type.STRING
        },
        puestoUsuario:{
            type:type.STRING
        },
        nameFotoUsuario:{
            type:type.STRING
        },typeFotoUsuario:{
            type:type.STRING
        },dataFotoUsuario:{
            type:type.BLOB('long')
        },
        estatusLaboralUsuario:{
            type:type.STRING
        },
        id_Departamento:{
            type:type.INTEGER
        },
        id_Area:{
            type:type.INTEGER
        }

    })
}