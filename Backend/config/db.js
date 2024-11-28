import mongoose from 'mongoose'
import mpngoose from 'mongoose'

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://ndev7567:food-del@cluster0.jxtbkma.mongodb.net/food-del').then(() => console.log('DB Connected'));
}