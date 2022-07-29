import Express from "express";
import dotenv from 'dotenv'

const app = Express();
dotenv.config();
const port=process.env.PORT

app.listen(port, console.log(`Server is running on port: ${port}`));