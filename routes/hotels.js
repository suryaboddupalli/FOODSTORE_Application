const express = require("express")
const router = express.Router()
const hotelController = require("../controllers/hotel.controller")
router.get("/", hotelController.hotels_details);

router.post("/addhotel",hotelController.hotel_create)

router.get("/getbyid/:id",hotelController.hotel_detailsbyId  );

router.put("/update/:id",hotelController.hotels_update)

router.delete("/delete:id",hotelController.hotel_delete)
    

module.exports = router