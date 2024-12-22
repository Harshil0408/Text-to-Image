import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conncetDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express();

app.use(express.json())
app.use(cors())
await conncetDB();

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/',(req,res)=>{
    res.send("API working");
})

app.listen(PORT,()=>console.log('server running on port'+ PORT));
