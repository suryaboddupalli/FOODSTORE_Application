const express = require('express')
const Recipe = require('../model/recipeschema')

const recipes_details = async(req,res)=>{
    try{
        const recipesdata =  await Recipe.find()
        res.json(recipesdata)
    }catch(error){
        res.send(error)
    }
}

const recipe_create = async(req,res)=>{
    try{
        const recipe = new Recipe({
            Name : req.body.Name,
            Cost : req.body.Cost , 
            RecipeImg : req.file.originalname 
        })
        const recipedata = await recipe.save()
        res.json(recipedata)
       }catch(error){
        res.send(error)
    }
}

const recipe_update = async(req,res)=>{
    try{
        const recipe = await User.findById(req.params.id)
        Name = req.body.Name,
        Cost = req.body.Cost,
        RecipeImg = req.file.originalname
        const data= await recipe.save()
        res.json(data)  
    }catch(error){
        res.send(error)
    }
}

const recipe_detailsbyId = async(req,res)=>{
    try{
        const Recipe = await recipe.findById(req.params.id)
        res.json(Recipe)
      }catch(error){
        res.send(error)
    }  
    
}
const recipe_delete = async(req,res)=>{
    try{
        const recipe = await User.findById(req.params.id)
        const data= await recipe.delete()
        res.json(data)  
    }catch(error){
        res.send(error)
    }
}


module.exports = {
    recipes_details,recipe_create,recipe_detailsbyId,recipe_update,recipe_delete
}
