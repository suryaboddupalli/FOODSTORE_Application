const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/foodstore"
const cors = require('cors')

const app =express();

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log('connected')
})
app.use(express.json())
app.use(cors())

const userRouter = require('./routes/userRoute')
app.use('/user',userRouter)

const hotelRouter = require('./routes/hotels')
app.use('/hotel',hotelRouter)

const recipeRouter = require('./routes/recipe')
app.use('/recipe',recipeRouter)

app.listen(8000,()=>{
    console.log('server connected')
})

