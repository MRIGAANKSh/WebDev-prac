const express=require('express');
const path=require('path')
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose-connection');
const ownersRouter=require('./routes/ownerRouter')
const productRouter=require('./routes/productRouter')
const userRouter=require('./routes/userRouter')
const app=express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use('/owners',ownersRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);


app.listen(3000,function(){
    console.log("Server is runnign on port 3000");
})