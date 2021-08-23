const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    cartItems : [
        {
            recipe : {type : mongoose.Schema.Types.ObjectId , ref : "Recipe"},
            quantity : {type : Number, default : 1},
            price : {type : Number}
        }
    ]
})
    

module.exports = mongoose.model('Cart',cartSchema)