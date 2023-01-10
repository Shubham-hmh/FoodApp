const express= require('express');
const mongoose=require("mongoose");

const app =express();
const port =5000
const path =require("path");

const mongoDBconnect =require('./db');
mongoDBconnect();




app.use(express.json());



app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));

//static files
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
});
app.listen(process.env.PORT || port,()=>{
    console.log(`backend is running on port ${port}`);
})

