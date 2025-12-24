const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('../lab/userRoute.js');    
const courseRoute = require('../lab/courseRoute.js');


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use('/users', userRoutes);   
app.use('/users', courseRoute); 

const uri = 'mongodb://localhost:27017/lab';

const db = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected');
        app.listen(3000, ()=>{
        console.log('server is listening')
        });
    }catch(error){
        console.log(error);
    }
}
db();
