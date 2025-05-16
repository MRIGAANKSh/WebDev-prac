const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://honhaarengineer2024:Mrigaank2402@cluster0.nrd7vul.mongodb.net/datassoc?retryWrites=true&w=majority&appName=Cluster0')

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    posts:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        },
        
    ],
    age:Number,
})

module.exports=mongoose.model('user',userSchema)

