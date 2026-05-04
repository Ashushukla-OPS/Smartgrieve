const mongoose = require("mongoose")
const { kMaxLength } = require("node:buffer")
const { type } = require("node:os")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
      type:String,
      required:true,
      unique:true

    },
    password:{
    type:String,
    required:true,
    },
    role: {
    type: String,
    enum: ["citizen", "officer", "admin"],
    default: "citizen"
},
    phone:{
    type:String,
    minlength:10,
    minlength:10
},
city:{
type:String,
required:true,
},
wardNumber:{
    type:String,
    default:null,
},
    department: {
      type: String,
      default: null,
    },

    employeeId:{
      type: String,
      default: null,
    },
},{
    timestamps:true,
})
const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel