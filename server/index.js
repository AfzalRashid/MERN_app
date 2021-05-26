import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from './routes/posts.js'
const app = express()
app.use(cors())

app.use(express.urlencoded({limit:"30 mb", extended : true}))
app.use(express.json({limit:"30 mb", extended : true}))
app.use('/posts',postRoutes)
const CONNECTION_URL='mongodb+srv://Testfaizen:Test@123@cluster0.ehgrp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))).catch((err)=>console.log(err.message))
mongoose.set('useFindAndModify',false)

