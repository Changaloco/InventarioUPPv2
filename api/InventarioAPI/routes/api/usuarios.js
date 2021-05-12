const { Usuario } = require('../../db');
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} =  require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const diskstorage = multer.diskStorage({
    destination:path.join(__dirname,'../storage/img'),
    filename:(req,file,cb) => {
        cb(null,Date.now()+'-upp-ImageProfile-'+file.original.name);
    }
})

const fileUpload = multer({
    storage:diskstorage
}).single('image')



router.post('/register',[
    check('correoUsuario','El formato de email es incorrecto').isEmail()
],async(req,res)=>{
    const errors =  validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()});
    }
    correo = req.body.CorreoUsuario;
    req.body.passwordUsuario = bcrypt.hashSync(req.body.passwordUsuario,10);
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
});





module.exports = router;