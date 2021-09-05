const express = require("express")
const router = express.Router();
const recipeController = require("../controllers/recipe.controller")
const multer = require('multer')

const storage = multer.diskStorage({
        destination : (req,file,callback)=>{
            callback(null,"./uploads")
        },
        filename : (req,file,callback)=>{
            callback(null,file.originalname); 
        }
    })
    const upload = multer({storage:storage})

router.get("/",recipeController.recipes_details);

router.post("/addrecipe",upload.single("RecipeImg"),recipeController.recipe_create);

router.get("/:id",recipeController.recipe_detailsbyId);

router.put("/update/:id",recipeController.recipe_update);

router.delete("/delete/:id", recipeController.recipe_delete);


module.exports=router;