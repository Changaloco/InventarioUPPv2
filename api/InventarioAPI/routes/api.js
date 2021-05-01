const router =  require('express').Router();

const apiTestRouter = require('./api/tests');

router.use('/tests',apiTestRouter);

module.exports= router;