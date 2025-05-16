const express=require('express');
const usermodel=require('./models/user');
const postmodel=require('./models/post');


const app=express()

app.get('/',function(req,res){
    res.send("hi this is working fine ohk")
})

app.get('/create',async function(req,res){
   let createduser=await usermodel.create({
    username:"mrigaank",
    age:20,
    email:"mrigaanksharma928@gmail.com",
   })
   res.send(createduser);
})

app.get('/post/create',async function(req,res){
   let createdpost=await postmodel.create({
    postdata:"hello good all",
    user:"6826f5a40bf0df2216615ae9",

   })
   let user=await usermodel.findOne({_id:"6826f5a40bf0df2216615ae9"});
   user.posts.push(createdpost._id);
   await user.save();

   res.send({createdpost,user});
   
})


app.listen(3000)