const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const User=require("../Models/userModel")

module.exports=async(req,res,next)=>{
    const {authorization}=req.headers;

    if(!authorization){
        return res.status(401).json({message:"You have to login first"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWT_SECRET,async(err,payload)=>{
        if(err){
            console.log('Invalid or Expired token,please try again',err)
        }else{
            const {_id}=payload
            const userData=await User.findById(_id)
            if(userData){
                req.user=userData
                next()
            }
        }
    })
}