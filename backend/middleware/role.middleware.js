const rolemiddleware = (...allowedRoles)=>{ 

    return (req,res,next)=>{
    let user = req.user
    if(!user){
        return res.status(401).json({
            success:false,
             message:"user not authenticated"
        })
    }
  
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }
     next()

    }
}

module.exports = rolemiddleware