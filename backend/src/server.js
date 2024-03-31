import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router.js";

const app = express();

app.use(
  cors({
    credentials: true, // Access-Control-Allow-Credentials: true
    origin: ["http://localhost:3000"], // specify the domains allowed to access your API (you can use wildcards like http://*.
  })
);

app.use("/api/foods", foodRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
