const router =  require('express').Router();

const apiTestRouter = require('./api/tests');
const apiAreaRouter = require('./api/areas');
const apiDepartamentoRouter = require('./api/departamentos');
const apiTrimestresRouter = require('./api/trimestres');
const apiProveedoresRouter = require('./api/proveedores');

router.use('/tests',apiTestRouter);
router.use('/areas',apiAreaRouter);
router.use('/departamentos',apiDepartamentoRouter);
router.use('/proveedores',apiProveedoresRouter);
router.use('/trimestre',apiTrimestresRouter);


module.exports= router;