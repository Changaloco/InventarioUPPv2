const Sequelize = require('sequelize');
require("dotenv").config();
//MODELS
const TestModel = require('./models/testTable');
const AreasModel =  require('./models/areas');
const DepartamentosModel = require('./models/departamentos');
const BienesModel = require('./models/bienes');
const DepreciacionModel = require('./models/catalogosDepreciacion')
const ConacModel = require('./models/clasificacionesCONAC');
const ComentariosModel= require('./models/comentarios');
const ComentariosContabilidadModel= require('./models/comentariosContabilidad');
const FacturasModel = require('./models/facturas');
const ModelosModel = require('./models/modelos');
const ProveedoresModel = require('./models/proveedores');
const ProyectosModel = require('./models/proyectos');
const ReportesModel = require('./models/reportes');
const ResguardosModel = require('./models/resguardos');
const TrimestresModel = require('./models/trimestres');
const UsuariosModel= require('./models/usuarios');
//variables
let database_port= process.env.DATABASE_PORT;
let database_name =  process.env.DATABASE_NAME;
let database_user = process.env.DATABASE_USER;
let database_password = process.env.DATABASE_PASSWORD;
let database_host = process.env.DATABASE_HOST;
const sequelize = new Sequelize(database_name,database_user,database_password,{host: database_host, dialect: 'mysql'} );

//verificaciones
const Test =TestModel(sequelize,Sequelize);
const Area = AreasModel(sequelize,Sequelize);
const Departamento = DepartamentosModel(sequelize,Sequelize);
const Bien = BienesModel(sequelize,Sequelize);
const Depreciacion =  DepreciacionModel(sequelize,Sequelize);
const Conac = ConacModel(sequelize,Sequelize);
const Comentarios = ComentariosModel(sequelize,Sequelize);
const Contabilidad = ComentariosContabilidadModel(sequelize,Sequelize);
const Factura = FacturasModel(sequelize,Sequelize);
const Modelo  = ModelosModel(sequelize,Sequelize);
const Proveedor = ProveedoresModel(sequelize,Sequelize);
const Proyecto = ProyectosModel(sequelize,Sequelize);
const Reporte = ReportesModel(sequelize,Sequelize);
const Resguardo  =  ResguardosModel(sequelize,Sequelize);
const Trimestre  = TrimestresModel(sequelize,Sequelize);
const Usuario = UsuariosModel(sequelize,Sequelize);
//sincronizacion

sequelize.sync({force:false})
.then(()=>{
    console.log('tablas sincronizadas')
})


module.exports = {
    Test,
    Area,
    Departamento,
    Bien,
    Depreciacion,
    Conac,
    Comentarios,
    Contabilidad,
    Factura,
    Modelo,
    Proveedor,
    Proyecto,
    Reporte,
    Resguardo,
    Trimestre,
    Usuario
}