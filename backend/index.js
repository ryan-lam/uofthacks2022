// Modules
const express = require("express")
const {v4} = require("uuid")
const cors = require("cors")
const bodyParser = require("body-parser")
// Middleware + json parsing
const app = express()
app.use(cors())
app.use(bodyParser.json())
// Database
var admin = require("firebase-admin");
var serviceAccount = require("./firestoreAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("employee")
const schedulerDB = db.collection("scheduler")
const payrollDB = db.collection("payroll")
const recruitingeDB = db.collection("recruiting")
const employmentRecordsDB = db.collection("employment-records")

// routes
app.use("/scheduler", require("./routes/scheduler"))
app.use("/payroll", require("./routes/payroll"))
app.use("/recruiting", require("./routes/recruiting"))
app.use("/employment-records", require("./routes/employmentRecords"))


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



app.post("/create-employee", async (req, res) => {
    const {id, name} = req.body
    await employeeDB.doc(id).set({
        id: id,
        name: name
    })
    await schedulerDB.doc(id).set({
        id: id,
        name: name
    })
    await payrollDB.doc(id).set({
        id: id,
        name: name
    })
    // await recruitingeDB.doc(id).set({
    //     id: id,
    //     name: name
    // })
    await employmentRecordsDB.doc(id).set({
        id: id,
        name: name
    })
    return res.json({success:true, id: id,name: name})
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Running, listening on port ${PORT}`)
})