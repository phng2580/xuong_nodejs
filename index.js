import express from "express";
import authRouter from "./src/routers/auth";
import productRouter from "./src/routers/product";
import categoryRouter from "./src/routers/category";
import cartRouter from "./src/routers/cart";
import cors from "cors";
import { connectDB } from "./src/config/db";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

connectDB(process.env.DB_URI);

app.use(`/api/v1/`, authRouter);
app.use(`/api/v1/`, productRouter);
app.use(`/api/v1/`, categoryRouter);
app.use(`/api/v1/`, categoryRouter);
app.use(`/api/v1/`, cartRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});