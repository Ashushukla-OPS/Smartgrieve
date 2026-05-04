const complaintModel = require("../models/complaint.model");
const UserModel = require("../models/user.model");
// const { analyzeComplaint } = require("../services/ai.service");
const { analyzeComplaint } = require("../services/ai.service");

const ComplaintController = async(req,res)=>{
     try{
    const { title, description, city, wardNumber, location, imageUrl } = req.body;
    if (!title || !description || !city || !wardNumber || !location) {
    return res.status(400).json({
    success: false,
    message: "All fields are required",
      });
    }

let aiResult = {
  department: "Pending Analysis",
  category: "Uncategorized",
  priority: "Medium",
  sentiment: "Neutral",
  summary: "",
};

try {
  aiResult = await analyzeComplaint(description);
} catch (error) {
  console.log("AI analysis failed:", error.message);
}







   const complaint = await complaintModel.create({
  citizen: req.user._id,
  title,
  description,
  city,
  wardNumber,
  location,
  imageUrl,

  department: aiResult.department,
  category: aiResult.category,
  priority: aiResult.priority,
  sentiment: aiResult.sentiment,
  summary: aiResult.summary,
});

     return res.status(201).json({
        message: "Complaint created successfully",
        complaint,
     })
     }

  catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }


}

const mycomplaintController = async(req,res)=>{
try{
    
let id = req.user._id
let mycomplaint = await complaintModel.find({citizen:id}).sort({ createdAt: -1 })
if(mycomplaint.length===0){
    return res.status(404).json({
        message:"no complaint found"
    })
}

return res.json({
    message:"complaint fetched successfully",
    mycomplaint,
    
})
}
catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const singleComplaintController = async(req,res)=>{
    try{
      let {id} =  req.params
      if(!id){
        return res.status(404).json({
            message : "Invalid credentials"
        })
      }
       let complaint = await complaintModel.findById(id).populate("citizen", "name email phone city wardNumber")
  .populate("assignedOfficer", "name email phone department");
         if (!complaint) {
         return res.status(404).json({
         success: false,
         message: "Complaint not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Complaint fetched successfully",
      complaint,
    });

    }
    catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
}
}


const updateComplaintController = async(req,res)=>{
   try{ let {id} = req.params
    let {status,remarks} = req.body
    if(!id||!status){
        return res.status(404).json({
            message : "Invalid credentials"
        })
      }

    const allowedStatus = ["Pending", "Assigned", "In Progress", "Resolved", "Rejected"];

    if(!allowedStatus.includes(status)){
        return res.status(404).json({
             success:false,
             message:"invalid status"
        })
    }

let existingComplaint = await complaintModel.findById(id)


    if (!existingComplaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    if (
      req.user.role === "officer" &&
      existingComplaint.department !== req.user.department
    ) {
      return res.status(403).json({
        success: false,
        message: "You can update only your department complaints",
      });
    }


       let updatedComplaint = await complaintModel.findByIdAndUpdate(id,{status,remarks},{new:true,runValidators: true })
 

    

        return res.status(200).json({
      success: true,
      message: "Complaint status updated successfully",
      updatedComplaint ,
    })
}catch(error){
  return res.status(500).json({
      success: false,
      message: error.message,
    });
}
}

module.exports = {ComplaintController,mycomplaintController, singleComplaintController,updateComplaintController}