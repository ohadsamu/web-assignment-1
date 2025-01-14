import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
  getPostById,
} from "../controllers/postController";
const router = express.Router();

router.post("/", createPost);
// router.post("/", authenticate, upload.single("image"), createPost);

router.get("/", getPosts);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.post("/:id/like", likePost);

export default router;
