import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'

const BASE_URL = process.env.BASE_URL;

const app = express()
app.use(express.json())
app.use(cors({
    origin: [`${BASE_URL}`],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)

mongoose.connect('mongodb+srv://1rn18cs090saiyuvarajpatil:Ljyd1234@cluster0.tpdwfpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.listen(process.env.PORT, () => {
    console.log("Server is running")
})
