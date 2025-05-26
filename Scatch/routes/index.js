const express=require('express');
const router=express.Router();
const isLoogedin=require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');

router.get('/',function(req,res){
    let error=req.flash("error");
    res.render('index',{error,loggedin:false});
})

router.get('/shop',isLoogedin,async function(req,res){
    let products=await productModel.find();
    let success=req.flash("success")
    res.render('shop',{products,success});
})

router.get('/cart',isLoogedin,async function(req,res){
    
    let user=await userModel.findOne({email:req.user.email}).populate("cart");

    res.render('cart',{user});
})


router.get('/addtocart/:id',isLoogedin,async function(req,res){
    let user=await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.id)
    await user.save()
    req.flash("success","Added To cart Succesfully..")
    res.redirect("/shop")
})

router.get('/logout',isLoogedin,function(req,res){
   
})

module.exports=router
