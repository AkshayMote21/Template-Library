import express from "express";        
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from "morgan";
import cors from 'cors';
import AllRoutes from './routes/index.js'
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors({
    credentials:true,
    origin :"http://localhost:3000" 
}));
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use("/api/v1", AllRoutes);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected");
});
  
app.listen(process.env.PORT_NUMBER, () => {
    console.log(`server is running on port ${process.env.PORT_NUMBER}`);
});
  