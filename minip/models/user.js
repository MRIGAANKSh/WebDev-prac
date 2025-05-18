const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://honhaarengineer2024:Mrigaank2402@cluster0.nrd7vul.mongodb.net/minip?retryWrites=true&w=majority&appName=Cluster0')


const userSchema=mongoose.Schema({
    username:String,
    email:String,
    name:String,
    age:Number,
    password:String,
    posts:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        },  
    ],
})

module.exports=mongoose.model("user",userSchema)