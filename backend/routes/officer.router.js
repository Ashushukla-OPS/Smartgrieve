const express = require("express");
const { getOfficerComplaints } = require("../controller/officer.controller");

const authmiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

const officerrouter = express.Router();

officerrouter.get(
  "/complaints",
  authmiddleware,
  roleMiddleware("officer"),
  getOfficerComplaints
);

module.exports = officerrouter;