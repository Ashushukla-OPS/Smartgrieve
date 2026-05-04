 const UserModel = require("../models/user.model")
 const jwt = require("jsonwebtoken")

 
 
 let authmiddleware = async(req,res,next)=>{
    try{
     let token = req.cookies.token
         if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });
    }
     let decode = await jwt.verify(token, process.env.SECRET_KEY)

     let user  = await UserModel.findById(decode.userId)
     
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    req.user = user
   next()
    }
  catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token invalid",
    });
  }
}

module.exports = authmiddleware