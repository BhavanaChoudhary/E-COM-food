import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from "./routes/userRoute.js"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

import 'dotenv/config'
// app config
const app=express()
const port=process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true
}));


// Removed the line app.use(cors(corsOptions));

//api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/orders", orderRouter);

// db connection
connectDB();
app.get("/",(req,res)=>{
  res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);

})
