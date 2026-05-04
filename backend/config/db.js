

require("dotenv").config()
const mongoose = require("mongoose")
const { log } = require("node:console")

const connectdb = async()=>{
    try{
    await  mongoose.connect(process.env.MONGO_URI)
    console.log("db connected successfully");
    
    }
    catch(error){
        error:error.message
        console.log("error in db connection");
        
    }
}
module.exports = connectdb