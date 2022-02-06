// Modules
const express = require("express")
const router = express.Router()
const {v4} = require("uuid")
// Database
var admin = require("firebase-admin");
const { NetworkContext } = require("twilio/lib/rest/supersim/v1/network");
const { route } = require("./scheduler");
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("employee")
const schedulerDB = db.collection("scheduler")
const payrollDB = db.collection("payroll")
const recruitingeDB = db.collection("recruiting")
const employmentRecordsDB = db.collection("employment-records")


//
router.post("/create-employee", async (req, res) => {
    const {id, first, last, address, DOB, age, hours, earnings} = req.body; 
    const employee = employmentRecordsDB.doc(id);
    await employee.set({
        id: id,
        first: first,
        last: last,
        address: address,
        DOB: DOB,
        age: age, 
        hours: hours,
        earnings: earnings
    },{merge:true})
    return res.json({success:true})
})






module.exports = router