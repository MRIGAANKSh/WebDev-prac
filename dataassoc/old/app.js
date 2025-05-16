const cookieParser = require('cookie-parser');
const express=require('express');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const app=express();

app.use(cookieParser());

app.get('/',function(req,res){
//    bcrypt.compare("Mrigaank&2402", "$2b$10$1TK8CbhARpYZbUquRVFv0enOyw5P785MvYuPAdT5Mj.S8JB2HxKoa", function(err, result) {
//     console.log(result)
// });

    let token=jwt.sign({email:"helloji@gamil.com"},"secret")
    console.log(token)
    res.cookie("token",token)
    res.send("hello ji")
});

app.get("/read",function(req,res){
   // res.send(req.cookies.token)
    let data=jwt.verify(req.cookies.token,"secret")
   res.send(data)
})


//res.cookie("name","mrigaank")
//req.cookie


// //bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

app.listen(3000)