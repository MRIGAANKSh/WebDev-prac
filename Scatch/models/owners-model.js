const mongoose=require('mongoose');


const OwnerSchema=mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true,
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    gstin:String,
    picture:String
})

module.exports=mongoose.model("owner",OwnerSchema);