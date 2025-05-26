const express=require('express');

const router=express.Router();
const ownermodel=require('../models/owners-model')


router.get('/admin',function(req,res){
    let success=req.flash("success")
    res.render("createproducts",{success});
})


if(process.env.NODE_ENV==="development"){
   router.post("/create",async function(req,res){
    let owner=await ownermodel.find();
    if(owner.length>0) {
        return res.status(500).send("you are not a new owner..");
    }
    
    let {fullname,email,password,gstin}=req.body;

    let createdowner=await ownermodel.create({
         fullname,
         email,
         password,
        })
    
    res.status(200).send(createdowner)
})
}


module.exports=router


