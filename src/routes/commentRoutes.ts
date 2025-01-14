import express from 'express';
import { createComment, getCommentsForPost, getComments, getCommentById, updateComment, deleteComment } from '../controllers/commentController';

const router = express.Router();

router.post('/:postId', createComment);

router.get('/:postId', getCommentsForPost);

router.get("/", getComments);

router.get("/:id", getCommentById);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

export default router;
