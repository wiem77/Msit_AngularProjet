const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config({ path: "./config/.env" })

const connectDB = require("./config/connectDB")
connectDB()
app.use(express.json())
app.use(cors())
//ROUTES
app.use("/users/", require("./routes/userroute"))

const port = 3000
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`the server is runnig on ${port}`)
)
