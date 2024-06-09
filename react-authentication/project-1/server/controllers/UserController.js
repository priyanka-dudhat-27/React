const User=require("../Models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

module.exports.signup=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name||!email||!password){
        return res.status(422).json({error:"please add all the fields"})
    }

    try {
        const existUser=await User.findOne({email:email})
        if(existUser){
            return res.status(422).json({error:"User already exist"})
        }else{
            req.body.password=await bcrypt.hash(password,12)
            const userData=await User.create(req.body)
            if(userData){
                return res.status(201).json({message:"User Created Successfully",data:userData})
            }else{
                return res.status(422).json({message:"User not created"})
            }

        }
    } catch (error) {
        console.log(error)
        return res.status(422).json({message:"Something Wrong"})
    }
}

module.exports.signin=async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(422).json({error:"please add all the fields"})
    }

    try {
        const userData=await User.findOne({email:email})
        if(userData){
            const matchPassword = await bcrypt.compare(password,userData.password)
            if(matchPassword){
                const token=jwt.sign({_id:userData},process.env.JWT_SECRET,{expiresIn:'24h'})
                return res.status(201).json({message:"User Login Successfully",data:userData,token:token})
            }else{
                return res.status(422).json({error:"Invalid Password"})
            }
        }else{
            return res.status(422).json({error:"User not found"})
        }
    } catch (error) {
        console.log(error)
        return res.status(422).json({message:"Something Wrong"})
    }
}

module.exports.home=async(req,res)=>{
    console.log('hello home')
}