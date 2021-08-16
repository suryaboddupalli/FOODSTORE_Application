const express = require('express');
const { findOne } = require('../model/userschema');
const router = express.Router()
const User = require('../model/userschema')

router.get('/',  async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch{
        res.send('error')
    }
    
});

router.post('/signup',async(req,res)=>{
    try{
        const error={};
        const { Firstname, Lastname, Email, Phone, Password } =req.body;
        await User.findOne({Email :Email})
        .then((data)=>{
            if(data.Email === Email){
                error.userexist ={
                    message : 'User already exist'
                }
            }
        }).catch((error)=>{
            res.status(500);
        })

        if(!Firstname || !Lastname || !Email || !Phone || !Password){
            error.notentered={
                message : "please enter required fields"
            }

        }
       const newuser = new User({
           Firstname,Lastname, Email, Phone, Password
       })

       if(Object.keys(error).length){
           res.status(400).json({error})
       }else{
           res.status(200).send()
           newuser.save();
       }
    }catch(error){
        res.status(500).send();
    }
})

router.post('/login',async(req,res)=>{
    try{
        const error={}
        const {Email ,Password} = req.body;
        await User.findOne({Email : Email})
        .then((data)=>{
            if(data.Email !== Email){
                error.usernotexist ={
                    message : 'invalid user'
                }
            if(data.email.Password !== Password){
                error.wrongpassword ={
                message : 'please enter the valid password'
            }       
                }
            }
        }).catch((error)=>{
            res.status(500);
        })

        if(!Email || !Password){
            error.notentered={
                message : "please enter required fields"
            }
        }

        if(Object.keys(error).length){
            res.status(400).json({error})
        }else{
            res.status(200).send()
        }
          
    }catch(error){
        res.send(error)
    }

})




module.exports = router