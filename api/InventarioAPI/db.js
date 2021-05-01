const Sequelize = require('sequelize');
//MODELS
const TestModel = require('./models/testTable');
require("dotenv").config();

//variables
let database_port= process.env.DATABASE_PORT;
let database_name =  process.env.DATABASE_NAME;
let database_user = process.env.DATABASE_USER;
let database_password = process.env.DATABASE_PASSWORD;
let database_host = process.env.DATABASE_HOST;
const sequelize = new Sequelize(database_name,database_user,database_password,{host: database_host, dialect: 'mysql'} );

//verificaciones
const Test =TestModel(sequelize,Sequelize);


//sincronizacion

sequelize.sync({force:false})
.then(()=>{
    console.log('tablas sincronizadas')
})


module.exports = {
    Test
}