const router =  require('express').Router();

const apiTestRouter = require('./api/tests');
const apiAreaRouter = require('./api/areas');
const apiDepartamentoRouter = require('./api/departamentos');


router.use('/tests',apiTestRouter);
router.use('/areas',apiAreaRouter);
router.use('/departamentos',apiDepartamentoRouter);


module.exports= router;