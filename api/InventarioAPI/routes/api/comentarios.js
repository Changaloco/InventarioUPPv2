const router = require('express').Router();
const {Comentarios} = require('../../db');

router.get('/',async(req,res)=>{
    const comentarios = await Comentarios.findAll();
    res.json(comentarios);
});

router.post('/',async(req,res)=>{
    const comentario= await Comentarios.create(req.body);
    res.json(comentario);
});


router.put('/:comentarioId',async (req,res)=>{
    await Comentarios.update(req.body,{
        where: {id_Comentario: req.params.comentarioId}
    });
    res.json({sucess:'comentario actualizado con exito'});
});

router.delete('/:testId',async(req,res)=>{
    await Comentarios.destroy({
        where: {id_Comentario: req.params.comentarioId}
    });
    res.json({sucess:'comentario se ha eliminado con exito'});
});

module.exports = router;