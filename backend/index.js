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
// Twilio
const http = require('http');
const key = require('./twilioAPI.json')
const { V4MAPPED } = require("dns")
const client = require('twilio')(key.accountSid, key.authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;



// routes
app.use("/scheduler", require("./routes/scheduler"))
app.use("/payroll", require("./routes/payroll"))
app.use("/recruiting", require("./routes/recruiting"))
app.use("/employment-records", require("./routes/employmentRecords"))
app.get("/", (req, res) => {return res.send("Running server")})



app.post("/create-employee", async (req, res) => {
    const {id, name, employee, scheduler, payroll, employmentRecord} = req.body
    await employeeDB.doc(id).set({
        id: id,
        name: name,
        phoneNumber: employee.phoneNumber
    })
    await schedulerDB.doc(id).set({
        id: id,
        name: name,
        "01012022Start":"9:00",
        "01012022End":"17:00",
        "02012022Start":"9:00",
        "02012022End":"17:00",
    })
    await payrollDB.doc(id).set({
        id: id,
        name: name,
        position: payroll.position,
        positionType: payroll.positionType,
        hourlyWage: payroll.hourlyWage,
        hoursWorked: payroll.hoursWorked,
    })
    await employmentRecordsDB.doc(id).set({
        id: id,
        name: name,
        taxforms: v4(),
        contracts: v4(),
        NDAS: v4()
    })
    return res.json({success:true, id: id, name: name})
})



app.post("/create-interview", async (req, res) => {
    const {id, name, date, time, } = req.body
    await recruitingeDB.doc(id).set({
        id: id,
        name: name
    })
    return res.json({success:true, id: id,name: name})
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Running, listening on port ${PORT}`)
})