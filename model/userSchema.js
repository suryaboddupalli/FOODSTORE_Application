const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Firstname :{
        type: String,
        
    },
    Lastname :{
        type: String,
        
    },
    Email :{
        type: String,
        
    },
    Phone :{
        type: Number,
        
    },
    Password :{
        type : String,
        
    },
    Role :{
        type : String
    }

})

module.exports = mongoose.model('User',userSchema)