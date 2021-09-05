const express = require("express")
const router = express.Router()
const hotelController = require("../controllers/hotel.controller")
const multer = require('multer')

const storage = multer.diskStorage({
        destination : (req,file,callback)=>{
            callback(null,"./uploads")
        },
        filename : (req,file,callback)=>{
            callback(null,file.originalname); 
        }
    })
    const upload = multer({storage:storage})

    
router.get("/", hotelController.hotels_details);

router.post("/addhotel",upload.single("HotelImg"),hotelController.hotel_create)

router.get("/getbyid/:id",hotelController.hotel_detailsbyId  );

router.put("/update/:id",upload.single("HotelName"),hotelController.hotels_update)

router.delete("/delete:id",hotelController.hotel_delete)
    

module.exports = router