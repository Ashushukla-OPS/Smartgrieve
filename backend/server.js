
require("dotenv").config();
const connectdb = require("./config/db")
const app = require("./app")


connectdb()
app.listen(process.env.PORT, ()=>{
    console.log("server is running at", process.env.PORT);
})
