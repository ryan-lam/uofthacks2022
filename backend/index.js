const express = require("express")
const {v4} = require("uuid")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res) => {return res.send("Backend is running")})

app.post("/test", (req, res) => {
    const {data} = req.body
    return res.json({success:true, data:data})
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})