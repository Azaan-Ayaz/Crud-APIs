const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const router = express.Router()
app.use(router)



const PORT = 2000
app.listen(PORT,()=>{
    console.clear()
    console.log(`Server is running on PORT ${PORT}`);
})

router.all("/",(req,res)=>{
    res.json("Hey Its Node APIs")
})

async function dataBase(){
    try {
        await mongoose.connect("mongodb://localhost:27017/data")
        console.log("Database is connected to server");
    } catch (error) {
        console.log(error);
    }
}
dataBase()

///////////////////////////////////////////////////////////////////////////////////////////////

const personSchema = new mongoose.Schema({
    name:{type:String},
    age: {type: Number},
    city: {type:String}
})

const personModel = new mongoose.model("person",personSchema)


router.get("/person",async(req,res)=>{
    const personData = await personModel.find()
    res.json(personData)
})

router.post("/person", async (req, res) => {
    const { name, age, city } = req.body;
    const personCreated = personModel({ name, age, city });
  
    await personCreated.save(); // Await the save operation
    res.json(personCreated);
  });

  router.delete("/person/:id",async(req,res)=>{
    const id = req.params.id
    const deletedData = await personModel.findByIdAndDelete(id)
    res.json(deletedData)
  })

router.delete("/person",async(req,res)=>{
    const deleteMany = await personModel.deleteMany({})
    res.json(deleteMany)
})

router.patch("/person/:id",async(req,res)=>{
const id =req.params.id
const {name,age,city} =req.body
const UpdatedData = await personModel.findByIdAndUpdate(
    id,
    {name:name,age:age,city:city}
)
res.json(UpdatedData)
})

////////////////////////////////////////////////////////////////////////////////////////////////

const movieSchema = new mongoose.Schema({
    title:{type:String},
    minAge: {type: Number},
    maxAge: {type: Number},
    category:{type:String}
})

const movieModel = new mongoose.model("movie",movieSchema)


router.get("/movie",async(req,res)=>{
    const movieData = await movieModel.find()
    res.json(movieData)
})

router.post("/movie",async(req,res)=>{
    const {title,minAge,maxAge,category}=req.body
    const movieBody = movieModel({title,minAge,maxAge,category})
    await movieBody.save()
    res.json(movieBody)
})

router.delete("/movie/:id",async(req,res)=>{
    try {
        const id = req.params.id
        const movieDeleted = await movieModel.findByIdAndDelete(id)
        res.json(movieDeleted)
    } catch (error) {
        console.log(error);
    }
})

router.delete("/movie",async(req,res)=>{
    try {
        const deleteMany = await movieModel.deleteMany({})
        res.json(deleteMany)
    } catch (error) {
        console.log(error);
    }
})

router.patch("/movie/:id",async(req,res)=>{
    try {
        const id =req.params.id
        const {title,minAge,maxAge,category} = req.body
        const UpdatedData = await movieModel.findByIdAndUpdate(
            id,
            {title:title,minAge:minAge,maxAge:maxAge,category:category}
        )
        res.json(UpdatedData)
    } catch (error) {
        console.log(error);
    }
})