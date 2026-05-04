const express = require("express");
const { getAllComplaints, addOfficer } = require("../controller/admin.controller");
const authmiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

const adminrouter = express.Router();

adminrouter.get(
  "/complaint",
  authmiddleware,
  roleMiddleware("admin"),
  getAllComplaints
);

adminrouter.post("/create/officer", authmiddleware,roleMiddleware("admin"),addOfficer )

module.exports = adminrouter;