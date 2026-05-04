const ComplaintModel = require("../models/complaint.model");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt")
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await ComplaintModel.find()
      .populate("citizen", "name email phone city wardNumber")
      .populate("assignedOfficer", "name email phone department")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "All complaints fetched successfully",
      total: complaints.length,
      complaints,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const addOfficer= async(req,res)=>{
   try{
     let {name ,email,password, department,employeeId,city,phone} = req.body

    if (!name || !email || !password || !phone || !city || !department || !employeeId) {
    return res.status(400).json({ message: "All fields are required" });
  }

 const isExisted = await UserModel.findOne({email})

 if(isExisted){
    return res.status(401).json({
        success:false,
        message:"email alredy registered"
    })
 }

 let hashedPass = await bcrypt.hash(password,10)
 let officer = await UserModel.create({
    name,email,password:hashedPass,city,employeeId,phone,department, role: "officer"
 })
 return res.status(201).json({
    success:true,
      message: "Officer created successfully",
      officer
    });
   }
   catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
   }
}


module.exports = { getAllComplaints,addOfficer }