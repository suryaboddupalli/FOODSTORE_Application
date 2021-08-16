const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    Id:{
        type:Number
    },
    Name:{
        type: String,
    },
    Landmark :{
        type: String,
    },
    City :{
        type: String,
    },
    States :{
        type: String,
    },
    Pincode :{
        type : Number,
    }})

module.exports = mongoose.model('Hotel',hotelSchema)