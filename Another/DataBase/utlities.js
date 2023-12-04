const TodoModel = require("./model")

 const TodoCreate = async(req,res)=>{
    const {text,password,status} = req.body
    const todos = await TodoModel.create({text,password,status})
    res.json(todos)
 }