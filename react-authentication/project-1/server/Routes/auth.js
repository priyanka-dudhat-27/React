const express = require('express')
const routes=express.Router()
const userController=require("../controllers/UserController")
const requireLogin = require('../middlewares/requireLogin')

routes.post("/signup",userController.signup)
routes.post("/signin",userController.signin)
routes.get("/home",requireLogin,userController.home)

module.exports=routes;