const express = require('express')
const Recipe = require('../model/recipeschema')
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const recipesdata =  await Recipe.find()
        res.json(recipesdata)
    }catch(error){
        res.send(error)
    }
});

router.post('/addrecipe',async(req,res)=>{
    try{
        const recipe = new Recipe({
            Name : req.body.Name,
            Cost : req.body.Cost   
        })
        const recipedata = await recipe.save()
        res.json(recipedata)
       }catch(error){
        res.send(error)
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const Recipe = await recipe.findById(req.params.id)
        res.json(Recipe)
      }catch(error){
        res.send(error)
    }  
})

router.put('/update/:id', async(req,res)=>{
    try{
        const recipe = await User.findById(req.params.id)
        Name = req.body.Name,
        Cost = req.body.Cost
        const data= await recipe.save()
        res.json(data)  
    }catch(error){
        res.send(error)
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        const recipe = await User.findById(req.params.id)
        const data= await recipe.delete()
        res.json(data)  
    }catch(error){
        res.send(error)
    }
})


module.exports=router;