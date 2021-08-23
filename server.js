const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const url = process.env.MongoDB_URL
const app =express();

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log("connected")
})
app.use(express.json())
app.use(cors())

const userRouter = require("./routes/user")
app.use("/user",userRouter)

const hotelRouter = require("./routes/hotels")
app.use("/hotel",hotelRouter)

const recipeRouter = require("./routes/recipe")
app.use("/recipe",recipeRouter)

const cartRouter = require("./routes/cart")
app.use("/cart",cartRouter)

app.listen(PORT,()=>{
    console.log("server connected")
})

