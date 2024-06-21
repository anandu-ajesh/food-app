import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router.js";
import userRouter from "./routers/user.router.js";
import orderRouter from './routers/order.router.js';
import { dbconnect } from "./config/database.config.js";
dbconnect();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true, // Access-Control-Allow-Credentials: true
    origin: ["http://localhost:3000"], // specify the domains allowed to access your API (you can use wildcards like http://*.
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use('/api/orders', orderRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
