const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    wardNumber: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "Uncategorized",
    },

    department: {
      type: String,
      default: "Pending",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved", "Rejected"],
      default: "Pending",
    },

    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },

    imageUrl: {
      type: String,
      default: "",
    },

    remarks: {
      type: String,
      default: "",
    },sentiment: {
  type: String,
  enum: ["Neutral", "Frustrated", "Angry"],
  default: "Neutral",
},

summary: {
  type: String,
  default: "",
},

  },
  
  { timestamps: true }
);


const ComplaintModel = mongoose.model("Complaint", complaintSchema);

module.exports = ComplaintModel