const express = require('express');
const bodyParser = require('body-parser');
const apiRouter =  require('./routes/api');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const app = express();
app.use(cors(config));
require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRouter);


app.get('/',(req,res)=>{
    res.send('Hola mundo');
})

app.use(morgan('dev'));
app.use(express.static('storage/img'));

app.listen(4000,()=>{
    console.log('server started')
});


