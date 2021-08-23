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
        type : Number,  
    }
})

module.exports = mongoose.model('User',userSchema)