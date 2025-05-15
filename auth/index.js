// const express=require('express');
// const app=express();
// const usermodel=require("./models/user")
// const bcrypt=require('bcrypt')
// const cookieParser=require('cookie-parser')
// const path=require('path');
// const jwt=require('jsonwebtoken')

// app.set('view engine','ejs')
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,'public')));
// app.use(cookieParser())

// app.get('/',function(req,res){
//     res.render("index")
// })

// app.post('/create', function(req,res){
//     let {username,email,password,age}=req.body;

//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash(password,salt,async function(err,hash){
            
//             let createduser=await usermodel.create({
//                  username,
//                 email,
//                 password:hash,
//                 age,
//             })
//             let token=jwt.sign({email},"token");
//             console.log(createduser);
            
//             res.cookie("token",token);
//            res.redirect('/')
//          })
//     })

    
    
    
// })

// app.listen(3000)


const express = require('express');
const app = express();
const usermodel = require("./models/user");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

// Middleware setup
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Routes
app.get('/', function (req, res) {
    res.render("index");
});

app.post('/create', async function (req, res) {
    try {
        const { username, email, password, age } = req.body;

        // Check for duplicate email (optional but recommended)
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const createdUser = await usermodel.create({
            username,
            email,
            password: hashedPassword,
            age,
        });

        // Sign JWT token
        const token = jwt.sign(
            { id: createdUser._id, email: createdUser.email },
            process.env.JWT_SECRET || "devsecret", // Use env var in real apps
            { expiresIn: "1h" }
        );

        // Set cookie with options
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false // Set to true if using HTTPS
        });

        console.log("Token sent:", token);
        res.redirect('/');
    } catch (err) {
        console.error("Error in /create:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/login',function(req,res){
    res.render('logine');
})

app.post('/login',async function(req,res){
    let user=await usermodel.findOne({email:req.body.email});
    console.log(user)
    if(!user) return res.send("something mailciou here");
    console.log(req.body.password);
    bcrypt.compare(req.body.password,user.password,function(err,result){
        
        if(result){
             const token = jwt.sign(
            { id: user._id, email:user.email },
            process.env.JWT_SECRET || "devsecret", // Use env var in real apps
            { expiresIn: "1h" }
        );

        // Set cookie with options
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false // Set to true if using HTTPS
        });
            return res.send("you are logged in");
        } 

        else{
            return res.send("wrong pass word")
        }
    }
    )
   
})

app.get('/logout',function(req,res){
    res.cookie("token", "", {
            httpOnly: true,
            sameSite: 'lax',
            secure: false // Set to true if using HTTPS
        });
    res.redirect('/')
})


// Start server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
