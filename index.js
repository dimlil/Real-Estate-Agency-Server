import Express from "express";

const app = Express();
const port=4000;

app.listen(port, console.log(`Server is running on port: ${port}`));