const express = require("express")
const {v4} = require("uuid")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

var admin = require("firebase-admin");
var serviceAccount = require("./firestoreAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("Employees")



app.get("/", (req, res) => {return res.send("Running server")})

app.get("/:name", (req, res) => {
    const name = req.params.name
    testDB.doc(name).set({
        Name: name
    })
    return res.send(`${name} added to database`)
})

app.post("/test", (req, res) => {
    const {data} = req.body;
    console.log(data)
    return res.json({success:true, data:data})
})










const PORT = 3000
app.listen(PORT, () => {
    console.log(`Running, listening on port ${PORT}`)
})