const mongoose=require('mongoose');
const debuger=require('debug')("development:mongoose");
const config=require('config')

mongoose
.connect(`${config.get("MONGODB_URI")}/Scatch?retryWrites=true&w=majority&appName=Cluster0`)
.then(function(){
    debuger("mongoose connected..")
})
.catch(function(err){
    console.log(err)
})

//Sctch ka control de dega connectaion ka 
module.exports=mongoose.connection;