const mongoose =  require("mongoose")

const TodoSchema = new mongoose.Schema({
    name : {type: String},
    password : {type: String},
    status : {type: Boolean,default:false},
})

const TodoModel = mongoose.model("Todos",TodoSchema)

module.exports = TodoModel 