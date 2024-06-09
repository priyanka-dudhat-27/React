const express=require('express')
const routes=express.Router()

routes.use("/user",require("../Routes/auth"))

module.exports=routes;