const express = require("express");
const router = express.Router()
const userController = require("../controllers/user.controller")
const middleware= require("../middleware")

router.get("/Profile",middleware, userController.Profile)

router.post("/Register", userController.Register)

router.post("/login",userController.Login)

module.exports = router