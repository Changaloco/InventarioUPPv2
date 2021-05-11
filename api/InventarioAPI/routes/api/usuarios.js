const { Usuario } = require('../../db');
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} =  require('express-validator');

router.post('/register',[
    check('correoUsuario','El formato de email es incorrecto').isEmail()
],async(req,res)=>{
    const errors =  validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()});
    }

    req.body.passwordUsuario = bcrypt.hashSync(req.body.passwordUsuario,10);

    const usuario = await Usuario.create(req.body);
    res.json(usuario);
});





module.exports = router;