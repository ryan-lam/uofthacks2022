// Modules
const cors = require("cors");
const express = require("express")
const router = require("express").Router
const {v4} = require("uuid")
// Middleware + parser
router.use(cors())
router.use(bodyParser.json())
// Database
var admin = require("firebase-admin");
const db = admin.firestore()
const testDB = db.collection("test")
const employeeDB = db.collection("Employees")


module.export = router