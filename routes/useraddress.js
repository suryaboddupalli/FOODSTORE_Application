const express = require('express')
const Useraddress = require('../model/useraddress')
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const userdata =  await Useraddress.find()
        res.json(userdata)
    }catch(error){
        res.send(error)
    }
});

router.post('/addhotel',async(req,res)=>{
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
})


router.get('/:id',async(req,res)=>{
    try{
        const useraddress = await Useraddress.findById(req.params.id)
        res.json(useraddress)
    }catch(error){
        res.send(error)
    }
})

router.put('/update/:id', async(req,res)=>{
    try{
        const useraddress = await Useraddress.findById(req.params.id)
        Name = req.body.Name,
        Landmark = req.body.Landmark,
        City = req.body.City,
        States = req.body.States,
        Pincode = req.body.Pincode,
        Phone = req.body.Phone
        const data= await Useraddress.save()
        res.json(data)
        
    }catch(error){
        res.send(error)
    }
    
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        const useraddress = await useraddress.findById(req.params.id)
        const data= await useraddress.delete()
        res.json(data)    
    }catch(error){
        res.send(error)
    }
})


module.exports=router;