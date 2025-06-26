import mongoose from "mongoose";

export async function connect(){
    try{
mongoose.connect(process.env.MONGO_URL!)
const connection=mongoose.connection;



connection.on('connected',()=>{
    console.log("MongoDb Connected Succesfully");
})

connection.on("error",()=>{
    console.log("mongodb error is there..")
})
}
catch(error){
console.log("mongoose not connected ohk");
console.log(error);
    }
}