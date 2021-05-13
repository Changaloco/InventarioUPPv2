const { Usuario } = require('../../db');
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} =  require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const jwt = require('jwt-simple');

const diskstorage = multer.diskStorage({
    destination: 'storage/img',
    filename:(req,file,cb) => {
        cb(null,Date.now()+'-upp-'+file.originalname);
    }
});

const fileUpload = multer({
    storage:diskstorage
}).single('image')



router.post('/register',fileUpload,[
    check('correoUsuario','El formato de email es incorrecto').isEmail()
],async(req,res)=>{
    const errors =  validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()});
    }

    const{
        nombreUsuario,
        apellidoMUsuario,
        apellidoPUsuario,
        matriculaUsuario,
        tipoUsuario,
        passwordUsuario,
        correoUsuario,
        perfilAcademicoUsuario,
        puestoUsuario,
        estatusLaboralUsuario,
        id_Departamento,
        id_Area
    } =  req.body;
    correo = correoUsuario;

    const newUsuario ={
        nombreUsuario:nombreUsuario,
        apellidoMUsuario:apellidoMUsuario,
        apellidoPUsuario: apellidoPUsuario,
        matriculaUsuario: matriculaUsuario,
        tipoUsuario: tipoUsuario,
        passwordUsuario: bcrypt.hashSync(passwordUsuario,10),
        correoUsuario: correoUsuario,
        perfilAcademicoUsuario: perfilAcademicoUsuario,
        puestoUsuario: puestoUsuario,
        fotoUsuario: req.file.filename,
        estatusLaboralUsuario: estatusLaboralUsuario,
        id_Departamento: id_Departamento,
        id_Area: id_Area
    }

    const usuario = await Usuario.create(newUsuario);
    res.json(usuario);
});


router.post('/login', async (req,res)=>{


    const usuario  = await Usuario.findOne({
        where:{correoUsuario: req.body.correoUsuario}});
        if(usuario){
            const equals = bcrypt.compareSync(req.body.passwordUsuario,usuario.passwordUsuario);
            if(equals){
                res.json({sucess:createToken(usuario)});
            }else{
                res.json({error:'error en usuario/contrasena'});
            }
        }else{
            res.json({error:'error en usuario/contrasena'});
        }

});


const createToken = (usuario)=>{
    const payload = {
        id_Usuario: usuario.id_Usuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(10,'minutes').unix()
    }

    return jwt.encode(payload,'arriba la octogloriosa');

}



module.exports = router;