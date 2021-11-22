import express from 'express';

const router = express.Router();

import { getDoctors, getUser } from '../controllers/users.js';

router.get('/doctors', getDoctors);
router.get('/:id', getUser);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;