const express = require("express")
const router = express.Router();
const recipeController = require("../controllers/recipe.controller")

router.get("/",recipeController.recipes_details);

router.post("/addrecipe",recipeController.recipe_create);

router.get("/:id",recipeController.recipe_detailsbyId);

router.put("/update/:id",recipeController.recipe_update);

router.delete("/delete/:id", recipeController.recipe_delete);


module.exports=router;