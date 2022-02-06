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
    return res.json((await schedulerDB.doc(id).get()).data())
})








module.exports = router