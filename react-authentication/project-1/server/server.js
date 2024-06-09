const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT||3000
const path=require('path')
const cors=require('cors')

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:['post'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//mongodb connection
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true
}).then((res)=>console.log('db is connected'))
.catch((err)=>console.log(err))

app.use(express.static(path.join(__dirname, 'public')))
app.use("/",require("./Routes/index"))

app.listen(port,async(err)=>{
    (err)?console.log(err):console.log(`port is running on server ${port}`)
})
