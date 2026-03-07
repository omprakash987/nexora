import express from "express";
import emailRoutes from './route/email.route.js'
import path from 'path'
import dotenv from 'dotenv'; 
import cors from 'cors'

const app = express(); 
const __dirname = path.resolve()

dotenv.config(); 

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
};
app.use(cors(corsOptions))

app.use(express.json({limit:"5mb"})); 
app.use(express.urlencoded({extended:true})); 

app.use('/api/email',emailRoutes); 
app.use(express.static(path.join(__dirname,"/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html")); 
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})