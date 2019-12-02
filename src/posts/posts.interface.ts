import { Document } from 'mongoose';

export interface Post extends Document {
    readonly uid: string;
    readonly title?: string;
    readonly body?: string;
    createdAt?: number;
    updatedAt?: number;
}