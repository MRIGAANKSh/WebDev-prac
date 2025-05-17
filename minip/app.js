const express=require('express');
const app=express();
const usermodel=require('./models/user')
const cookieParser=require('cookie-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const path=require('path');



app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser())


app.get('/',function(req,res){
    res.render("index");
})

app.post('/register',async function(req,res){
    let {username,name,password,email,age}=req.body;

    let user= await  usermodel.findOne({email});

    if(user){
        return res.status(500).send("user already registered ....");

    }

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
           let regis=await  usermodel.create({
            username,
            name,
            email,
            age,
            password:hash
           });

           let token=jwt.sign({email:email,userid:regis._id},"secret");
           res.cookie("token",token);
           res.send("user registered");

        })
    })
    

   
})



app.listen(3000,function(){
    console.log("server runnign on port 3000");
})

