const express = require('express');
const router=express.Router();
const alienRepository = require('../models/alien')


router.get('/',async(req,res)=>{
    try{
       let aliens = await alienRepository.find();
       res.json(aliens);
    }
    catch(err){
        res.send('Error '+err);
    }
})

router.get('/:id',async(req,res)=>{

    try{
        let id = req.params.id;
        let aliegn = await alienRepository.findById(id);
        res.json(aliegn);
    }
    catch(err){
        res.send(err);
    }
});

router.patch('/:id', async( req,res)=>{
    try{
        let id = req.params.id;
        let alien = await alienRepository.findById(id);
        //alien.sub= req.body.sub;
        let a1 = await alien.save();

        res.json(a1);
    }
    catch(err){
        res.send(err)
    }
})

router.delete('/:id', async( req,res)=>{
    try{
         let deletedRec =   await alienRepository.findByIdAndDelete(req.params.id)
         res.json(deletedRec);
    }
    catch(err){
        res.send(err);
    }
})

router.post('/', async(req,res) =>{
   
    const alien = new alienRepository({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try{
        console.log(alien)
        let a1= await alien.save(alien);
        res.json(a1);
    }
    catch(err){
        res.send('Error '+err);
    }
})



module.exports=router;