
const Hotel = require('../model/cartschema')

const cart_details = async(req,res)=>{
    try{
        const Cart = await Cart.find()
        res.json(Cart)
          
    }catch(error){
        res.send(error)
    } 
}

const addcart = async(req,res)=>{
    try{
        const Cart = new Cart({
            user : req.user._Id,
            cartItems  : req.body.cartItems
        })
        const cartdata = await Cart.save()
        res.send(cartdata)
    }catch(error)
    {
        res.send(error)  
    }
}


module.exports = {
    cart_details, addcart
}
