
const express = require('express')
const Hotel = require('../model/hotelschema')

const hotels_details = async(req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.json(hotels)
          
      }catch(error){
          res.send(error)
      } 
}

const hotel_create = async(req,res)=>{
    try{
        const hotel = new Hotel({
            Id : req.body.Id,
            Name : req.body.Name,
            Landmark : req.body.Landmark,
            City : req.body.City,
            States : req.body.States,
            Pincode : req.body.Pincode
        })
        const hoteldata = await hotel.save()
        res.send(hoteldata)
    }catch(error){
        res.send(error)  
    }
}

const hotels_update = async(req,res)=>{
    try{
        const hotel = Hotel.findById(req.params.id)
         Id=req.body.Id,
         Name = req.body.Name,
         Landmark = req.body.Landmark,
         City = req.body.City,
         States = req.body.States,
         Pincode = req.body.pincode
        const data= hotel.save()
        res.json(data) 
    }catch(error){
        res.send(error)
    }
}

const hotel_detailsbyId = async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.json(hotel)  
    }catch(error){
        res.send(error)
    } 
    
}
const hotel_delete = async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const data= await hotel.delete()
        res.json(data)
    }catch(error){
        res.send(error)
    }
}


module.exports = {
    hotels_details, hotel_create, hotels_update,hotel_detailsbyId,hotel_delete
}
