const express=require('express');
const upload=require('../config/multer-config')
const productmodel=require('../models/product-model')
const router=express.Router();

router.post('/create',upload.single("image"),async function(req,res){
    try {
        let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body;
    
        let product=await productmodel.create({
            image:req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
    
        })
        
        req.flash("success","product created succesfully")
        res.redirect('/owners/admin');
    } catch (error) {
        res.send(err.message)
    }
    
})

module.exports=router


