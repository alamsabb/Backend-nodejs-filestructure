const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("Hello World");
})



module.exports=router;