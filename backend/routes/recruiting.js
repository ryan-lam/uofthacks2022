// Modules
const express = require("express")
const router = express.Router()
const {v4} = require("uuid")
// Database
var admin = require("firebase-admin")
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("employee")
const schedulerDB = db.collection("scheduler")
const payrollDB = db.collection("payroll")
const recruitingDB = db.collection("recruiting")
const employmentRecordsDB = db.collection("employment-records")



// get request to get everyone who has an interview
router.get("/", async (req, res) => {
    const querySet = await recruitingDB.get()
    const recruits = []
    querySet.forEach((recruit) => {
        const recruitData = recruit.data()
        recruits.push(recruitData)
    })
    return res.json({interviews: recruits})
})



// // post request to add someone to the interview database
// router.post("/", async (req, res) => {
//     const {id, first, last, DOB, age, institution, references, previousExperience, criminalHistory} = req.body; 
//     const recruit = employmentRecordsDB.doc(id);
//     await recruit.set({
//         id: id,
//         first: first,
//         last: last,
//         DOB: DOB,
//         age: age, 
//         institution: institution,
//         references: references,
//         previousExperience: previousExperience,
//         criminalHistory: criminalHistory
//     },{merge:true})
//     return res.json({success:true})
// })



module.exports = router