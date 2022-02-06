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
    const timeStart = date+"Start"
    const timeEnd = date+"End"
    const employee_array = []
    const querySet = await schedulerDB.where(timeStart, "!=", null).get()
    if (querySet.empty) {
        console.log(`No employees working on ${date}`)
        return res.json({data: null})
    } else {
        console.log(`${querySet.size} employees working on ${date}`)
        querySet.forEach((query) => {employee_array.push(query.data())})
        return res.json({data: employee_array})
    }
})










module.exports = router