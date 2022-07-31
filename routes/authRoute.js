import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import { verifyUser } from "../controllers/verifyUser.js";
const authRouter = Router();

authRouter.post('/register', (req, res) => {
    register(req, res);
});

authRouter.post('/login', (req, res) => {
    login(req, res);
});

authRouter.get('/verify', async (req, res) => {
    const token = req.cookies['aid'];
    const result = await verifyUser(token);
    res.send(result)
});

export default authRouter