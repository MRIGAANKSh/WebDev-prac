const mongoose=require('mongoose');

mongoose.connect(`mongodb+srv://honhaarengineer2024:mrigaank24@firstcluster.rareniv.mongodb.net/mongouser?retryWrites=true&w=majority&appName=firstcluster`)

const userScheama=mongoose.Schema({
    image:String,
    name:String,
    email:String
})


module.exports=mongoose.model('users',userScheama);