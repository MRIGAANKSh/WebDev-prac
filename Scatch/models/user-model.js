const mongoose=require('mongoose');


const UserSchema=mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true,
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

module.exports=mongoose.model("user",UserSchema);