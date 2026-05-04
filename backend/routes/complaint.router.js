const express = require("express")
const {ComplaintController, mycomplaintController, singleComplaintController,updateComplaintController} = require("../controller/complaint.controller")
const authmiddleware = require("../middleware/auth.middleware")
const rolemiddleware = require("../middleware/role.middleware")
const ComplaintRouter =  express.Router()

ComplaintRouter.post("/create", authmiddleware,ComplaintController )

ComplaintRouter.get("/my", authmiddleware,mycomplaintController )

ComplaintRouter.get("/:id", authmiddleware,singleComplaintController )



ComplaintRouter.patch("/:id/status", authmiddleware,rolemiddleware("officer", "admin"),updateComplaintController )

module.exports = ComplaintRouter