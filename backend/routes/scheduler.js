// Modules
const cors = require("cors");
const express = require("express")
const router = express.Router()
const {v4} = require("uuid")
// Database
var admin = require("firebase-admin");
const { NetworkContext } = require("twilio/lib/rest/supersim/v1/network")
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("employee")
const schedulerDB = db.collection("scheduler")
const payrollDB = db.collection("payroll")
const recruitingeDB = db.collection("recruiting")
const employmentRecordsDB = db.collection("employment-records")
// Twilio
const key = require('../twilioAPI.json')
const client = require('twilio')(key.accountSid, key.authToken);

router.get("/msg", (req, res) => {
    nofityEmployee("John Wick", "01012022", "9:00", "15:00")
    return res.json({success: true})
})

router.get("/:date", async (req, res) => {
    const date = req.params.date
    var timeStart = (date+"Start")
    const working = []
    const notWorking = []
    const querySet = await schedulerDB.get()
    querySet.forEach((employee) => {
        const employeeData = employee.data()
        if (employeeData[timeStart] == null) {
            console.log(employeeData.id, "not working")
            notWorking.push(employeeData)
        } else {
            console.log(employeeData.id, "working")
            working.push(employeeData)
        }
    })
    return res.json({working: working, notWorking: notWorking})
})

router.post("/:date", async (req, res) => { // employee must exist
    const date = req.params.date
    const timeStart = date+"Start"
    const timeEnd = date+"End"
    const {id, start, end} = req.body
    console.log("Scheduling hours...")
    await schedulerDB.doc(id).set({
        [timeStart]: start,
        [timeEnd]: end
    }, {merge: true})
    const employee = (await schedulerDB.doc(id).get()).data()
    nofityEmployee(employee.name, date, start, end)
    return res.json(employee)
})


const nofityEmployee = async (name, date, start, end) => {
    const day = date.slice(0,2)
    const month = date.slice(2,4)
    const year = date.slice(4)
    // const phoneNumber = (await employeeDB.doc(id).get()).data().phoneNumber
    const body = `Hi, ${name}, your working hours for ${day}/${month}/${year} has been re-scheduled to ${start}-${end} by your employeer. Please log into SimpleHR to view these changes`
    const message = await client.messages.create({
     body: body,
     from: '+16474903692',
     to: '+16472868186'
    //  to: phoneNumber
   })
   console.log(message.body)
}






module.exports = router