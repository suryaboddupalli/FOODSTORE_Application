
const express = require('express')
const User = require('../model/userschema')
const jwt = require('jsonwebtoken')


const Register =async(req,res)=>{
    try{
        const error={};
        const { Firstname, Lastname, Email, Phone, Password } =req.body;
        let exist = await User.findOne({Email :Email})
            if(exist){
                error.notentered ={
                    message : 'User Already Exist'
                }
            }
    
        if(!Firstname || !Lastname || !Email || !Phone || !Password){
            error.notentered={
                message : "Please Enter Required Fields"
            }
        }
       const newuser = new User({
           Firstname,Lastname, Email, Phone, Password
       })

       if(Object.keys(error).length){
           res.json({error})
       }else{
           res.send()
           newuser.save();
       }

    }catch(error){
        res.send(error);
    }
}


const Login = async(req,res)=>{
    try{
        const error={}
        const {Email ,Password} = req.body;
        let exist = await User.findOne({Email : Email,Password: Password})
        if(!exist){
            error.invalid={
                message: "Invalid login Credentials"
            }
        }   


        if(Object.keys(error).length){
            res.json({error})
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,"jwtsecret",{expiresIn:360000},
            (err,token) =>{
              if (err) throw err;
              return res.json({token})
          }  
            )
          
    }catch(error){
        res.send(error)
    }
}

const Profile =async(req,res)=>{
    try{
        let exist = await User.findById(req.user.id);
        if(!exist){
            return res.send('User not found');
        }
        res.json(exist);
        
    }catch(error){
        res.send(error)
    }
}




module.exports ={
    Profile, Register, Login
}