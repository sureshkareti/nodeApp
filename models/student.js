const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    isQualified:{
        type:Boolean,
        default:false
    }
});

module.exports= mongoose.model('Student',studentSchema);