const { json } = require("express/lib/response")
const TodoModel = require("./model")

const todoCreate = async(req,res)=>{
    const {text,password,status} = req.body
    const todo = await TodoModel(text,password,status)
    res.json(todo)
}

const todoGet = async(req,res)=>{
    const todos = await TodoModel.find()
    res.json(todos)
}

module.exports = {todoCreate,todoGet}