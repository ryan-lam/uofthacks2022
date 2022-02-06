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

    const querySet = await recruitingeDB.get()
    console.log(querySet);
    const recruits = []
    querySet.forEach((recruit) => {
        const recruitData = recruit.data()
        // const recruit = {
        //     id: recruitData.id,
        //     first: recruitData.first,
        //     last: recruitData.last,
        //     DOB: recruitData.DOB,
        //     age: recruitData.age, 
        //     institution: recruitData.institution,
        //     references: recruitData.references,
        //     previous_experience: recruitData.previousExperience,
        //     criminal_history: recruitData.criminalHistory
        // }
        console.log(recruitData)

        recruits.push(recruitData)
    })
    console.log(recruits)
    return res.json({recruits: recruits})
})

// post request to add someone to the interview database
router.post("/", async (req, res) => {
    const {id, first, last, DOB, age, institution, references, previousExperience, criminalHistory} = req.body; 
    const recruit = employmentRecordsDB.doc(id);
    await recruit.set({
        id: id,
        first: first,
        last: last,
        DOB: DOB,
        age: age, 
        institution: institution,
        references: references,
        previousExperience: previousExperience,
        criminalHistory: criminalHistory
    },{merge:true})
    return res.json({success:true})
})

module.exports = router