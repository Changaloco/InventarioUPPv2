const { Usuario } = require('../../db');
const router = require('express').Router();
const bcrypt = require('bcryptjs')


router.post('/register',async(req,res)=>{
    req.body.passwordUsuario = bcrypt.hashSync(req.body.passwordUsuario, 10);
    const usuario = Usuario.create(req.body);
    res.json(user);
});





module.exports = router;