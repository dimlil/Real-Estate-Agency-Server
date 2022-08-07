import { Router } from "express";
import { createPost } from "../controllers/create.js";
import { getAllPosts, getPost, getTopPosts } from "../controllers/getPost.js";
const router = Router();

router.get('/', (req, res) => {
    res.send("hello world");
});

router.get('/posts', (req, res) => {
    getAllPosts(req,res)
});

router.get('/topPosts', (req, res) => {
    getTopPosts(req,res)
});

router.post('/create', (req, res) => {
    createPost(req, res);
});

router.get('/details/:id', (req, res) => {
    getPost(req,res);
});

export default router