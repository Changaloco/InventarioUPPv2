const express = require('express');
const bodyParser = require('body-parser');
const apiRouter =  require('./routes/api');
const morgan = require('morgan');

const app = express();
require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRouter);


app.get('/',(req,res)=>{
    res.send('Hola mundo');
})

app.use(morgan('dev'));

app.listen(3000,()=>{
    console.log('server started')
});

