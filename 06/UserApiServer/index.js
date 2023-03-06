import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))


import userRouter from './routes/user.route.js'
const connect = () => {
    try{

        mongoose.connect(process.env.MONGODB_URL);

        const  connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('Database connected successfully')
        })

        connection.on('disconnected',() => {
            console.log('Database disconnected')
        })

    }catch(err){
      console.log(err.message || err);
    }
}

app.listen(process.env.PORT,() => {
    console.log(`Back end running on Port ${process.env.PORT}`)

    connect();
})

app.use('/',userRouter);
