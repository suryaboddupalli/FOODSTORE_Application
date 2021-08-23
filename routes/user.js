const express = require("express");
const router = express.Router()
const userController = require("../controllers/user.controller")

router.get("/", userController.users_details)

router.post("/Register", userController.Register)

router.post("/login",userController.Login)

module.exports = router