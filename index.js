import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
dotenv.config()
const app=express();

import routeStartingPoint from "./Routes/routeStartingPoint.js"
const PORT =process.env.PORT
app.use(cors())
app.use(express.json())
app.use("/",routeStartingPoint)

app.listen(PORT,()=>console.log(`I started the app at ${8000} 😁`))