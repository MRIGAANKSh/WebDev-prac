const usermodel=require('../models/user-model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {generateToken}=require('../utils/generateToken')

module.exports.registerUser=async function(req,res){
   
    try {
         let {email,password,fullname}=req.body;

        let user=await usermodel.findOne({email:email})
        if(user){
           req.flash("error","user already exist ");
       res.redirect('/')
        }
         bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err) {
                    return err.message;
                }
                else{
                   
                    let createduser=await usermodel.create({
                        email,
                        password:hash,
                        fullname,
                    })

                    let token=generateToken(createduser);
                    res.cookie("token",token);
                    res.redirect('/shop')
                } 
            })
         })

        
    } catch (error) {
        res.send(err.message);
    }
}


module.exports.loginUser=async function(req,res){
    let {email,password}=req.body;

    let user=await usermodel.findOne({email:email});

    if(!user){
       req.flash("error","user do not exist ");
       res.redirect('/')
    }

    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            let token=generateToken(user);
            res.cookie("token",token);
            res.redirect('/shop')
        }
        else{
            req.flash("error","email and password are incorrect ");
       res.redirect('/')
        }
    })

};

module.exports.logout=async function(req,res){
    res.cookie("token","");
    res.redirect('/')
}