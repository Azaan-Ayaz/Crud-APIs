const express = require("express")
const { todoCreate, todoGet } = require("./services")


const app = express()

app.use(express.json())

const router = express.Router()

router.post("/",todoCreate)
router.post("/",todoGet)

module.exports = router