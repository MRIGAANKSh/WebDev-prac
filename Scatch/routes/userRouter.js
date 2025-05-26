const express=require('express');
const usermodel=require('../models/user-model')
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {generateToken}=require('../utils/generateToken')
const {registerUser,loginUser,logout}=require('../controllers/auth_controller')


router.get('/',function(req,res){
    res.send("hello its users ")
})

router.post('/register',registerUser)


router.post('/login',loginUser);

router.get('/logout',logout)

module.exports=router


