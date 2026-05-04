const UserModel = require("../models/user.model")

const jwt = require("jsonwebtoken")
const coookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const register = async(req,res)=>{
  try{
      const {
    name,email,password,role,phone,city,wardNumber
    } = req.body
    if(!name||!password||!city||!phone||!wardNumber||!email){
        return res.status(401).json({
          message:"All fields are required"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)


    const user = await UserModel.create({
        name,email, password:hashPassword, role:"citizen",phone,city,wardNumber
    })

    if(!user){
        return res.status(404).json({
    message: "User not found",
  });
}
      const token = await jwt.sign({
        userId: user._id,
        role:user.role
      },
     process.env.SECRET_KEY,
      {
        expiresIn:"2h"
      }
    )

res.cookie("token", token, {
  httpOnly: true,
});

    
    return res.status(201).json({
        success:true,
        message:"user registered successfully"
,
user
    })}

  catch(error){
   return res.status(500).res({
    success:false,
    message:"server error you can't  register"
   })
  }


}




const login = async(req,res)=>{
    try{
     let { email, password} =  req.body

     if(!email||!password){
        return res.status(404).json({
          message: "All fields are required"  
        })
     }


     let user = await UserModel.findOne({email})

      
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password)
     if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

     const token = await jwt.sign({
        userId:user._id,
         role: user.role
     },
     process.env.SECRET_KEY,
    {
        expiresIn:"1d"
    })


    res.cookie("token", token,{
         httpOnly: true,
    })

    return res.status(201).json({
        success:true,
        message:"logged in successfully",
        user
    })
    }
    catch(error){
      return res.status(404).json({
        message:""
      })
    }
}
const getme = (req, res) => {
  try {
    let user = req.user;

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: "kjhgfc",
    });
  }
};


  

const logout = (req,res)=>{
    res.clearcookie("token")
    return res.status(200).json({
        message:"user loggedout successfully"
    })
}

module.exports= {register,login,getme,logout}