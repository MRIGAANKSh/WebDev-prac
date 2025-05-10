const express=require('express')

const app=express()
const path=require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')


app.get("/",function(req,res){
    res.render("index");
});
app.get("/profile/:username",function(req,res){
    let a=req.params.username
    res.send(`chal rha hai bhaiyo ${a}`);
});
app.get("/profile/:username/:age",function(req,res){
    let a=req.params.username
    let b=req.params.age
    res.send(`chal rha hai bhaiyo ${a} and your age is ${b}`);
});
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send("something broke")
})
app.listen(3000,function(){
    console.log("chal rha hai")
})

