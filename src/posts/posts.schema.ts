import * as mongoose from 'mongoose';
import { Post } from './posts.interface';

export const PostSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ref',
        required: true
    },
    title: String,
    body: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

PostSchema.pre<Post>('save', (next) => {
    if(this.isNew) {
        this.createdAt = this.updatedAt = Date.now()
    } else {
        this.updatedAt = Date.now()
    }
    next()
})