const express = require("express")
const UserModel = require("./models/user.model")
const app = express()
const ComplaintRouter = require("./routes/complaint.router")
const cookieParser = require("cookie-parser");
const router = require("./routes/auth.router")
const bcrypt = require("bcrypt");
const authmiddleware = require("./middleware/auth.middleware");
const { log } = require("node:console");
const ComplaintModel = require("./models/complaint.model");
const adminrouter = require("./routes/admin.router");
const rolemiddleware = require("./middleware/role.middleware");
const officerrouter = require("./routes/officer.router");
app.use(cookieParser());
app.use(express.json())



app.use("/api/auth/", router)
app.use("/api/complaint", ComplaintRouter)

app.use("/api/mycomplaint",ComplaintRouter)
app.use("/api/complaint/", ComplaintRouter)



app.use("/update/", ComplaintRouter)

app.use("/api/admin",adminrouter)

app.use("/api/officer", officerrouter);



module.exports = app
