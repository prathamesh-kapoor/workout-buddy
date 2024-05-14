import express from "express"
import mongoose from "mongoose"

//ling .env file to server.js
import dotenv from 'dotenv'    
dotenv.config();

import router from "./routes/workouts.js"


// connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(port, ()=>{
        console.log(`Connected to DB and listening on ${port}`);
    });
 })
 .catch((error)=>{
    console.log(error);
 })



//create an express app 
const app = express();

//extracting port number from the env file
const port = process.env.PORT;

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
});

app.use('/api/workouts/', router);



//Routes 
