const express = require("express")
const connectDatabase = require("./DataBase/database")
const router = require("./DataBase/routes")
const App = express()

connectDatabase()

App.use("/todo",router)

App.all("/",(req,res)=>{
    res.json("Hey")
})

module.exports = App