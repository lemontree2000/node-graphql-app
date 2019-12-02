import { Document } from 'mongoose';

export interface User extends Document {
    readonly email: string;
    readonly name: string;
    readonly avatar?: string;
    readonly phone?: number;
    readonly age?: number;
    createdAt?: number;
    updatedAt?: number;
}