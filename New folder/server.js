//express js
//intro
//npmm package ///framework
//framework --- when a lib tell about how it work it is called a framework it give flow ----
//manages recieving the req and res....

//app.get(route,reqhandler)




const express=require('express')

const app=express()
app.use(function(req,res,next){
    console.log("middleware chala")
    next()
})
app.get('/',function(req,res){
    res.send("hello world")
})



app.get('/hi',function(req,res){
    res.send("hello world guys")
})
app.get('/profile',function(req,res,next){
    return next(new Error("Soemhting went wrog"))
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send("something broke")
})

app.listen(3000)

//routes create krna hai

