// Modules
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

// get request to get everyone who has an interview
router.get("/", async (req, res) => {
    // const {}
    // const
})
// post request to add someone to the interview database
router.post("/", async (req, res) => {
    const {id, first, last, DOB, age, institution, references, previous_experience, criminal_history} = req.body; 
    const candidate = employmentRecordsDB.doc(id);
    await candidate.set({
        id: id,
        first: first,
        last: last,
        DOB: DOB,
        age: age, 
        institution: institution,
        references: references,
        previous_experience: previous_experience,
        criminal_history: criminal_history
    },{merge:true})
    return res.json({success:true})
})

module.exports = router