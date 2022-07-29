import Express from "express";
import dotenv from 'dotenv'
import router from "./routes/index.js";
import authRouter from "./routes/authRoute.js";
import { connectToDB } from "./connectToDB.js";
import cookieParser from "cookie-parser";

const app = Express();

app.use(cookieParser());

dotenv.config();

app.use(router);
app.use(authRouter);

const port=process.env.PORT
connectToDB()

app.listen(port, console.log(`Server is running on port: ${port}`));