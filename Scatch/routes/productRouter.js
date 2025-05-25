const express=require('express');

const router=express.Router();

router.get('/',function(req,res){
    res.send("hello its product ")
})

module.exports=router


