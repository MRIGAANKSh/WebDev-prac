const express = require('express');
const app = express();
const usermodel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const postmodel = require('./models/post');
const crypto=require('crypto');
const multer=require("multer")

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// crypto.randomBytes(12,function(err,bytes){
//        console.log(bytes.toString("hex")) ;
//     })
//uniqure name set ho rha hai //...


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
     //unique name ohk this is ...
     crypto.randomBytes(12,function(err,bytes){
        const fn=bytes.toString("hex") + path.extname(file.originalname)
       cb(null, fn)
    })
    
  }
})

const upload = multer({ storage: storage })

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/test', function (req, res) {
    res.render("test");
});

app.post('/upload', upload.single("image"),function (req, res) {
    console.log(req.file);
    res.redirect("/test")
});


app.get('/login', function (req, res) {
    res.render("login");
});

app.get('/profile', isloggedin, async function (req, res) {
    let user=await usermodel.findOne({email:req.user.email}).populate("posts")
    console.log(user)
    res.render("profile",{user});
   
});

app.get('/like/:id', isloggedin, async function (req, res) {
    let post=await postmodel.findOne({_id:req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid)===-1){
        post.likes.push(req.user.userid);
    }
    else{
        post.likes.splice(post.likes.indexOf(req.user.userid),1);
    }
    
    await post.save();
   
    res.redirect("/profile");
   
});


app.get('/edit/:id', isloggedin, async function (req, res) {
    let post=await postmodel.findOne({_id:req.params.id}).populate("user");



    res.render("edit",{post})
   
});

app.post('/update/:id', isloggedin, async function (req, res) {
    let post=await postmodel.findOneAndUpdate({_id:req.params.id},{content:req.body.content}).populate("user");



    res.redirect("/profile")
   
});

app.post('/post', isloggedin, async function (req, res) {
    let user=await usermodel.findOne({email:req.user.email})
    let {content}=req.body;
    let post=await postmodel.create({
        user:user._id,
        content

    });

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile")
   
    
   
});

app.get('/logout', function (req, res) {
    res.cookie("token", "");
    res.redirect("/login");
});

app.post('/register', async function (req, res) {
    let { username, name, password, email, age } = req.body;

    let user = await usermodel.findOne({ email });
    if (user) {
        return res.status(500).send("User already registered.");
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).send("Salt generation failed");

        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return res.status(500).send("Password hashing failed");

            let regis = await usermodel.create({
                username,
                name,
                email,
                age,
                password: hash
            });

            let token = jwt.sign({ email: email, userid: regis._id }, "secret");
            res.cookie("token", token);
            return res.send("User registered");
        });
    });
});

app.post('/login', async function (req, res) {
    let { password, email } = req.body;

    let user = await usermodel.findOne({ email });
    if (!user) {
        return res.status(500).send("Something went wrong. User not found.");
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) return res.status(500).send("Error comparing passwords");

        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "secret");
            res.cookie("token", token);
            return res.status(200).redirect('/profile');
        } else {
            return res.redirect('/login');
        }
    });
});

function isloggedin(req, res, next) {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }

    try {
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
        next();
    } catch (err) {
        return res.send("Invalid token");
    }
}

app.listen(3000, function () {
    console.log("Server running on port 3000");
});
