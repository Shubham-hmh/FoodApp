const express = require('express');
const router = express.Router();


router.post('/foodData',(req,res)=>{
    try{
        console.log(global.items);
        res.send([global.items,global.categories]);

    }
    catch(error){
        console.error(error.message);
        res.send("Server Error");
    }
})

module.exports=router;