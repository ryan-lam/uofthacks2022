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



router.get("/", async (req, res) => {
    const querySet = await payrollDB.get()
    const payrolls = []
    // position, hourly wage, hours worked
    querySet.forEach((employee) => {
        const employeeData = employee.data()
        const payroll = {
            id: employeeData.id,
            name: employeeData.name,
            position: employeeData.position,
            positionType: employeeData.positionType,
            hourlyWage: employeeData.hourlyWage,
            hoursWorked: employeeData.hoursWorked,
            paycheckValue: (parseInt(employeeData.hourlyWage)*parseInt(employeeData.hoursWorked)).toString()
        }
        payrolls.push(payroll)
    })
    console.log(payrolls)
    return res.json({payrolls: payrolls})
})



module.exports = router