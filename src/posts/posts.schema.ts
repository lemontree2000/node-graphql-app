import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    title: String,
    body: String,
    createdAt: Date,
    updatedAt: Date
})