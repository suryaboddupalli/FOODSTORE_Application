const express = require("express")
const router = express.Router();
const userAddressController = require("../controllers/useraddress.controller")

router.get("/",userAddressController.userAddress_details);

router.post("/addhotel",userAddressController.userAddress_create)

router.get("/:id",userAddressController.userAddress_detailsbyId)

router.put("/update/:id", userAddressController.userAddress_update)

router.delete("/delete/:id",userAddressController.userAddress_delete);


module.exports=router;