const express=require("express")
const { signup, signin } = require("../controllers/user.controller")
const isAuth = require("../middleware/AUth")
const userRouter=express.Router()

// sinup route
userRouter.post("/signup",signup)

// signin route
userRouter.post("/signin",signin)

module.exports=userRouter