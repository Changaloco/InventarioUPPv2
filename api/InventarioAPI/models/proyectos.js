module.exports = (sequelize,type)=>{
    return sequelize.define('Proyectos',{
        id_Proyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        claveProyecto: type.STRING,
        nombrProyecto: type.STRING,
        partidaPresupuestal: type.STRING,
        fuenteFinanciamiento: type.STRING,
        numeroCuenta: type.STRING
    })
}