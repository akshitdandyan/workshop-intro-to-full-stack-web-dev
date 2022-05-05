import { Router } from "express";
import { createPost, getPosts } from "./controllers/post.js";

const router = Router();

router.post("/createpost", createPost);
router.get("/getposts", getPosts);

export default router;
