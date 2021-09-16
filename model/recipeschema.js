const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    Name : {
        type : String 
    },
    Cost : {
        type : Number
    },
    RecipeImg : {
        type : String
    }
})

module.exports = mongoose.model('Recipe',recipeSchema)