import Express from "express";
import dotenv from 'dotenv'
import router from "./routes/index.js";

const app = Express();
dotenv.config();

app.use(router)
const port=process.env.PORT

app.listen(port, console.log(`Server is running on port: ${port}`));