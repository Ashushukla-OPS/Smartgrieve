
const express = require("express")
const {register, login, getme, logout} = require("../controller/auth.controller")
const authmiddleware = require("../middleware/auth.middleware")
const router =  express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/me",authmiddleware,getme)
router.post("/logout", authmiddleware,logout )
module.exports = router