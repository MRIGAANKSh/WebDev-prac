// const express=require('express')
// const userModel=require('./usermodel')


// const app=express()

// app.get('/',function(req,res){
//     res.send("hello ji")
// })

// app.get('/user',async function(req,res){
//     let created=await userModel.create(
//         {
//             name:"Mrigaank Sharma",
//             username:"mrigaank0004",
//             email:"mrigaankshhhh3@gmail.com"
//         }
//     )
//     res.send(created)
// })

// app.get('/update',async function(req,res){

// let updates=await userModel.findOneAndUpdate({username:"mrigaank0004"},{name:"mrigaank kumar sharma"},{new:true});
// res.send(updates);
// })

// app.get('/read',async function(req,res){
//     let users=await userModel.find();
//     res.send(users);
// })

// app.get('/delete',async function(req,res){
//     let users=await userModel.findOneAndDelete({name:"mrigaank kumar sharma"});
//     res.send(users)
// })
// app.listen(3000,function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("runnign perfect")
// })


const express=require('express')
const path=require('path')
const app=express()
const usermodel=require('./models/user')
const user = require('./models/user')

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render("index")
})

app.get('/read',async function(req,res){
    let allusers=await usermodel.find();
    res.render("read",{allusers})
})

app.post('/create',async function(req,res){
    let {name,email,image}=req.body;

    let createduser=await usermodel.create({
        name:name,
        email:email,
        image:image
    })
    res.redirect('/read')

})

app.get('/delete/:id',async function(req,res){
    let deleteduser=await usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect("/read")

})


app.get('/edit/:userid',async function(req,res){
    let allusers=await usermodel.findOne({_id:req.params.userid});
    res.render("edit",{allusers})
})

app.post('/update/:userid',async function(req,res){
    let {name,email,image}=req.body;
    let updateuser=await usermodel.findOneAndUpdate({_id:req.params.userid},
        {name:name,
        email:email,
        image:image},{new:true})

    res.redirect('/read')
})

app.listen(3000,function(req,res){
    console.log("workign good")
})