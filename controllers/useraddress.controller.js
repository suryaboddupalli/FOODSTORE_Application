const express = require('express')
const Useraddress = require('../model/useraddress')

const userAddress_details = async(req,res)=>{
    try{
        const userdata =  await Useraddress.find()
        res.json(userdata)
    }catch(error){
        res.send(error)
    } 
}

const userAddress_create = async(req,res)=>{
    try{
        const  useraddress= new address({
            Name : req.body.Name,
            Landmark : req.body.Landmark,
            City : req.body.City,
            States : req.body.States,
            Pincode : req.body.Pincode,
            Phone : req.body.Phone
        })
        const userdata = await useraddress.save()
        res.json(userdata)
    }catch(error){
        res.send(error) 
    }
}

const userAddress_update = async(req,res)=>{
    try{
        const useraddress = await Useraddress.findById(req.params.id)
        Name = req.body.Name,
        Landmark = req.body.Landmark,
        City = req.body.City,
        States = req.body.States,
        Pincode = req.body.Pincode,
        Phone = req.body.Phone
        const data= await useraddress.save()
        res.json(data)
        
    }catch(error){
        res.send(error)
    }
}

const userAddress_detailsbyId = async(req,res)=>{
    try{
        const useraddress = await Useraddress.findById(req.params.id)
        res.json(useraddress)
    }catch(error){
        res.send(error)
    }
    
}
const userAddress_delete = async(req,res)=>{
    try{
        const useraddress = await useraddress.findById(req.params.id)
        const data= await useraddress.delete()
        res.json(data)    
    }catch(error){
        res.send(error)
    }
}


module.exports = {
    userAddress_details,userAddress_create,userAddress_detailsbyId, userAddress_update,userAddress_delete
}