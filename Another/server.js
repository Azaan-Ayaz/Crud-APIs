const connectDatabase = require("./DataBase/database")
const App = require("./app")
const dotenv = require("dotenv").config()


const PORT = process.env.PORT || 5000
// connectDatabase()



App.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})
