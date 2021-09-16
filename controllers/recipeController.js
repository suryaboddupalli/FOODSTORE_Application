const Recipe = require('../model/recipeSchema')

const recipesDetails = async(req,res)=>{
    try{
        const recipesdata = await Recipe.find()
        res.json(recipesdata)
    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal Server Error")
    }
}

const addRecipe = async(req,res)=>{
    try{
        const {Name, Cost} = req.body
        const {RecipeImg}= req.file;
        const newRecipe = new Recipe (
          {Name, Cost, RecipeImg}
        )
        await newRecipe.save()
        res.send("Data saved")
    }catch(error){
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send("Internal server error")
    }
}

module.exports = {
    recipesDetails, addRecipe
}
