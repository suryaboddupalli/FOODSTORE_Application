
const express = require('express')
const User = require('../model/userschema')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config();
const secret = process.env.JWT_SECRET


const Register =async(req,res)=>{
    try{
        const error={};
        const { Firstname, Lastname, Email, Phone, Password } =req.body;
        await User.findOne({Email :Email})
        .then((data)=>{
            if(data.Email === Email){
                error.notentered ={
                    message : 'User Already Exist'
                }
            }
        }).catch((error)=>{
            res.send(error);
        })

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
        res.send();
    }
}



const Login = async(req,res)=>{
    try{
        
        const {Email ,Password} = req.body;
        let exist = await User.findOne({Email : Email,Password: Password})

        if(exist.Role === admin){
            let payload = {
                user:{
                    id : exist.id
                }
            }
            jwt.sign(payload,secret,{expiresIn:360000},
                (err,token) =>{
                  if (err) throw err;
                  return res.json({token})
                }  
            )

        }else{
            let payload = {
                user:{
                    id : exist.id
                }
            }
            jwt.sign(payload,secret,{expiresIn:360000},
                (err,token) =>{
                  if (err) throw err;
                  return res.json({token})
                }  
            )

        }
          
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