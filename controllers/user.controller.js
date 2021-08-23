const express = require('express')
const User = require('../model/userschema')

const users_details =async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch{
        res.send('error')
    }
}


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
            res.status(500);
        })
       
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
}


const Login = async(req,res)=>{
    try{
        const error={}
        const {Email ,Password} = req.body;
        await User.findOne({Email : Email})
        .then((data)=>{
            if(data){
                res.status(200)
            }
            else{
                res.status(400)
                error.invalid={
                    message: "Invalid login Credentials"
                }
            }
            if(data.Password !== Password){
                error.invalid ={
                message : 'Please Enter the Valid Password'
            }       
            }
     
        })
        .catch((error)=>{
            res.status(500);
        })

        if( !Email || !Password){
            error.invalid={
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
}



module.exports ={
    users_details, Register, Login
}