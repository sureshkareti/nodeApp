const express= require('express');
const mongoose = require('mongoose');


const app = express();

//mongo db connection
const url='mongodb://localhost:27017/AlienDB';
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;
con.on('open',function(){
    console.log("connected to mongo...");
});

//saying app to use json
app.use(express.json());

//registering the service with app
const alienRouter = require('./routes/alienService');
app.use('/aliens',alienRouter);

let studentRouter = require('./routes/studentService');
app.use('/students',studentRouter);


app.listen(8084,()=>{
    console.log("server started...");
})


