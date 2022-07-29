import { Router } from "express";
import { register } from "../controllers/auth.js";
const authRouter = Router();

authRouter.post('/register', (req, res) => {
    register(req,res);
})

export default authRouter