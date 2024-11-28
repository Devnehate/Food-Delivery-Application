import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './Routes/foodRoute.js';
import userRouter from './Routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRouter.js'


// app config
const app = express()
const port = 5000

// middelware
app.use(express.json())
app.use(cors())

// db connection
connectDb();

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req,res) => {
    res.send('API working...')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
