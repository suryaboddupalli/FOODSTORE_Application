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
            HotelName : req.body.HotelName,
            Locality : req.body.Locality,
            HotelType : req.body.HotelType,
            HotelImg : req.file.originalname
        })
        const hoteldata = await hotel.save()
        res.send(hoteldata)
        .then(()=>res.json('new hotel is posted'))
        .catch((error)=>res.json(error))
    }catch(error){
        res.send(error)  
    }
}

const hotels_update = async(req,res)=>{
    try{
        const hotel = Hotel.findById(req.params.id)
        HotelName = req.body.HotelName,
        Locality  = req.body.Locality,
        HotelType = req.body.HotelType,
        HotelImg = req.file.originalname
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