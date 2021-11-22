import express from 'express';
import mongoose from 'mongoose';

import User from '../models/users.js';

const router = express.Router();

export const getDoctors = async(req, res) => {
    try {
        const user = await User.find({ "type": "Doctor" });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async(req, res) => {
    const { id } = req.params;

    try {
        const doctor = await User.findById(id);
        res.status(200).json(doctor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const createPost = async(req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export const updatePost = async(req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deletePost = async(req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// export const likePost = async(req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const post = await PostMessage.findById(id);

//     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

//     res.json(updatedPost);
// }


export default router;