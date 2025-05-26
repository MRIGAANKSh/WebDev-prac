const express=require('express');
const path=require('path')
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose-connection');
const ownersRouter=require('./routes/ownerRouter')
const productRouter=require('./routes/productRouter')
const userRouter=require('./routes/userRouter')
const indexRouter=require('./routes/index')
const expressSession=require('express-session');
const flash=require('connect-flash');
require('dotenv').config();

const app=express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret:process.env.EXPRESS_SESSION_SECRET
    })
)

app.use(flash())

app.use('/owners',ownersRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/',indexRouter)

app.listen(3000,function(){
    console.log("Server is runnign on port 3000");
})