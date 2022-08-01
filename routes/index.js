import { Router } from "express";
import { createPost } from "../controllers/create.js";
const router = Router();

router.get('/', (req, res) => {
    res.send("hello world");
});

router.post('/create', (req, res) => {
    createPost(req, res);
});

export default router