const ComplaintModel = require("../models/complaint.model");

const getOfficerComplaints = async (req, res) => {
  try {
    const officer = req.user;

    if (!officer.department) {
      return res.status(400).json({
        success: false,
        message: "Officer department not found",
      });
    }

    const complaints = await ComplaintModel.find({
      department: officer.department,
    })
      .populate("citizen", "name email phone city wardNumber")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Officer complaints fetched successfully",
      department: officer.department,
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

module.exports = { getOfficerComplaints }