const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload.service');


router.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("Hello World");
})


router.post('/upload',upload.single('customeName'),(req,res)=>{
    // console.log(req.body);
    res.send("File Uploaded");
})


module.exports=router;