const express=require('express')
const fs=require('fs')
const app=express()
const path=require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')



app.get('/',function(req,res){
    fs.readdir(`./files`,function(err,files){
        console.log(files)
        res.render("index",{files:files});
    })
    
    console.log("server runnign on port 3000")
})

app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        if(err){
            console.log(err);
        }
        res.render('show',{filename:req.params.filename,data:filedata});


    })
})

app.get('/edit/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename})
})


app.get('/data/:filename',function(req,res){
   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        if(err){
            console.log(err);
        }
        res.render('data',{filename:req.params.filename,data:filedata});


    })
})

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        if(err){
            console.log("error creating file")
        }
        else{
            console.log("file created")
            res.redirect("/")
            
        }
    })
})


app.post('/edit',function(req,res){
    //console.log(req.body)
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.name}.txt`,function(err){
        if(err){
            console.log("error changin name")
        }
        res.redirect('/')
    })
})

app.post('/data',function(req,res){
    console.log("data come");
    fs.writeFile(`./files/${req.body.name}`,`${req.body.newdata}`,function(err){
        if(err){
            console.log('err')
        }
        res.redirect('/')
    })
    console.log(`${req.body.newdata}`)
})


app.listen(3000)