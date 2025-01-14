import express from 'express';
import { createComment, getCommentsForPost } from '../controllers/commentController';

const router = express.Router();

router.post('/:postId', createComment);

router.get('/:postId', getCommentsForPost);

export default router;
