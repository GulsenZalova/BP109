const express = require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const dotenv= require("dotenv")
const cors= require("cors")
const app=express()


app.use(bodyParser.json())
app.use(cors())
dotenv.config()



const CategorySchema= new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})

const CategoryModel = mongoose.model("category",CategorySchema)

// CRUD  (post,get,getbyid,delete,put)


app.get("/categories", async (req,res)=>{
   let categories = await CategoryModel.find()
   res.send(categories)
})


app.get("/categories/:id", async (req,res)=>{
    let id= req.params.id
  let category= await CategoryModel.findById(id)
  res.send(category)
})


app.delete("/categories/:id", async (req,res)=>{
    let id=req.params.id
   await CategoryModel.findByIdAndDelete(id)
   res.send("Success Delete")
})

app.post("/categories", async  (req,res)=>{
    let newCategory= CategoryModel(req.body)
    await newCategory.save()
    res.send("succes post")
})


app.put("/categories/:id",async (req,res)=>{
    let id=req.params.id
    let updateCategory=req.body
   await CategoryModel.findByIdAndUpdate({_id:id},updateCategory)
   res.send("success update")
})

mongoose.connect(process.env.MyConnectionString)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})







app.listen(3030,()=>{
    console.log("bu app 3030 portunda dinlenilir")
})