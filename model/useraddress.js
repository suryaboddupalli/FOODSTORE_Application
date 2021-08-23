const mongoose = require('mongoose')

const useraddressSchema = new mongoose.Schema({
    Name:{
        type: String  
    },
    Landmark :{
        type: String   
    },
    City :{
        type: String   
    },
    States :{
        type: String  
    },
    Pincode :{
        type : Number  
    },
    Phone :{
        type : Number
    }
})

module.exports = mongoose.model('Useraddress',useraddressSchema)