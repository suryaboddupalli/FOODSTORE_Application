const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const url = process.env.MongoDB_URL
const app =express();
const userRouter = require("./routes/user")
const hotelRouter = require("./routes/hotels")
const recipeRouter = require("./routes/recipe")
const cartRouter = require("./routes/cart")

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log("connected")
})
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)

app.use("/hotel",hotelRouter)

app.use("/recipe",recipeRouter)

app.use("/cart",cartRouter)

app.listen(PORT,()=>{
    console.log("server connected")
})

