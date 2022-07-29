import Express from "express";
import dotenv from 'dotenv'
import router from "./routes/index.js";
import { connectToDB } from "./connectToDB.js";

const app = Express();
dotenv.config();

app.use(router)
const port=process.env.PORT
connectToDB()

app.listen(port, console.log(`Server is running on port: ${port}`));