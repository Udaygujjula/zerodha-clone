require('dotenv').config()

const express=require("express")
const mongoose=require("mongoose")

const uri=process.env.MONGO_URL
const PORT=process.env.PORT || 3002         
const app=express()
app.listen(PORT,()=>{
    console.log("App started")
    console.log(`server is started at port ${PORT}`);
   mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

})
