require('dotenv').config();
const User = require('../model/userschema')
const jwt = require('jsonwebtoken')
const sceret = process.env.JWT_SCERET;
const http = require('../constants/http')

const register = async(req,res)=>{
    try{
        const error={};
        const { Firstname, Lastname, Email, Phone, Password } = req.body;
        await User.findOne({Email :Email})
        .then((data)=>{
            if(data.Email === Email){
                error.userExist = {
                    errorMessage : 'User Already Exist'
                }
            }
        }).catch((error)=>{
            res.send(error);
        })
       const newuser = new User({
           Firstname, Lastname, Email, Phone, Password
        })
       if(Object.keys(error).length){
           res.status(http.BAD_REQUEST)
           res.json({error})
        }else{
           res.status(http.SUCCESS)
           newuser.save();
           res.send("User Registered Successfully")
        }
    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal Server Error")
    }
}

const userDetail = async(req,res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal Server Error")
    }
}
const login = async(req,res)=>{
    try{
        const {Email ,Password} = req.body;
        await User.findOne({Email : Email , Password : Password})
        .then((data)=>{
            if(data){
                let Admin = false
                if(data.Admin == true)
                {
                  Admin = true
                }
                const payload = {
                   id : data.id
                }  
                const Token = jwt.sign(payload,sceret,{expiresIn:360000})
                res.json({Token,Admin})
            }
            else{
                res.status(http.BAD_REQUEST)
                res.json({
                    error : "Invalid Credentials"
                })
            }
        })
        .catch((error)=>{	
           res.send(error)
        })

    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal Server Error")
    }
}


module.exports = {
    register, login, userDetail
}