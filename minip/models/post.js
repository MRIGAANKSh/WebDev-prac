const mongoose=require('mongoose')



const postSchema=mongoose.Schema({
   
    user:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"user"
        
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:String,
    likes:{
        types:mongoose.Schema.Types.ObjectId,ref:"user"
    }
})

module.exports=mongoose.model("post",postSchema)