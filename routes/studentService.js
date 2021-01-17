const express = require('express');
const router = express.Router();

const studentRepository = require("../models/student");

router.get('/',async(req,res)=>{

    try{
        let students = await studentRepository.find();
        res.json(students);
    }
    catch(err){
        res.send("Error "+err);
    }
});

router.get('/:id', async(req,res) =>{
    try{
        let id = req.params.id;

        let student = await studentRepository.findById(id);
        res.json(student);
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req,res) =>{

    try{
        let student = await studentRepository.findById(req.params.id);
        student.isQualified= req.body.isQualified;

        let s1 = await student.save();
        res.json(s1);
    }
    catch(err){
        res.send(err)
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        let student = await studentRepository.findByIdAndDelete(req.params.id);
        res.json(student);
    }
    catch(err){
        res.send(err)
    }
})


router.post('/', async(req,res) =>{
    try{
        let student = new studentRepository({
            name: req.body.name,
            dept: req.body.dept,
            isQualified: req.body.isQualified
        });

        let s1 = await student.save();
        res.json(s1);
    }
    catch(err){
        res.send(err);
    }
})

module.exports=router;