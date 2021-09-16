const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    Firstname : {
        type: String,  
    },
    Lastname : {
        type : String,  
    },
    Email : {
        type : String,  
    },
    Phone : {
        type : Number,  
    },
    Password : {
        type : String, 
    },
    Admin : {
        type : Boolean, 
       
    }
},{timestamps : true}
)
userSchema.pre('save',async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.Password,salt)
        this.Password = hashedPassword
        next()
    }catch(error){
      next(error)
    }
})
userSchema.methods.isvalidPassword = async function(Password){
    try{
      return await bcrypt.compare(Password, this.Password)

    }catch(error){
        throw(error)
    }
}

module.exports = mongoose.model('User',userSchema)