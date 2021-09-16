const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    HotelName : {
        type : String
    },
    Locality : {
        type: String
    },
    HotelType : {
        type : String
    },
    HotelImg : {
        type : String
    }
})

module.exports = mongoose.model('Hotel',hotelSchema)