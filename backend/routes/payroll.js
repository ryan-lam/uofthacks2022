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











module.exports = router