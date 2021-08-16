const express = require('express')
const Hotel = require('../model/hotelschema')
const router = express.Router()

router.get('/',  async (req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.json(hotels)
        
    }catch(error){
        res.send(error)
    } 
});

router.post('/addhotel',async(req,res)=>{
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
})

router.get('/getbyid/:id',  async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.json(hotel)
        
    }catch(error){
        res.send(error)
    } 
});

router.put('/update/:id',async(req,res)=>{
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
    
})

router.delete('/delete:id',async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const data= await hotel.delete()
        res.json(data)
        console.log(data)

    }catch(error){
        res.send(error)
    }
})

module.exports = router