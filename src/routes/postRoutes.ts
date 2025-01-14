import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getPostById,
  getPostBySender
} from "../controllers/postController";
const router = express.Router();

router.post("/", createPost);

router.get("/", getPosts);

router.get("/:id", getPostById);

router.get("/", getPostBySender);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);


export default router;
