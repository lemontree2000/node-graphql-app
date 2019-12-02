import * as mongoose from 'mongoose';
import { User } from './users.interface';

export const UserScchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: String,
    age: Number,
    phone: Number,
    createdAt: Date,
    updatedAt: Date
})

UserScchema.pre<User>('save',  (next) => {
    if (this.isNew) {
        this.createdAt = this.updatedAt = Date.now()
    } else {
        this.updatedAt = Date.now()
    }
    next()
})