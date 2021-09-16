const Hotel = require('../model/hotelSchema')
const http = require('../constants/http')

const hotelsDetails = async(req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.json(hotels) 
    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal Server Error")
    } 
}

const addhotel = async(req,res)=>{
    try{
        const {HotelName, Locality, HotelType} = req.body
        const {HotelImg}= req.file;
        const newHotel = new Hotel (
          {HotelName, Locality, HotelType, HotelImg}
        )
        newHotel.save()
        res.send("Data saved")
        res.status(http.SUCCESS)

    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR) 
        res.send("Internal Server Error")
    }
}

module.exports = {
    hotelsDetails, addhotel
}