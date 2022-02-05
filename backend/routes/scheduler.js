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
const employeeDB = db.collection("Employees")




router.get("/:date", (req, res) => {
    console.log("hit")
    const date = req.params.date
    console.log(date)
    return res.send(date)
})










module.exports = router