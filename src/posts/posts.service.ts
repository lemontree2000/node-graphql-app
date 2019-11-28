import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostInput } from './input/post.input';
import { PostType } from './dto/posts.dto';
import { Post } from './posts.interface';


@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async create(createPostDto: PostInput): Promise<Post> {
        const createPost = new this.postModel(createPostDto);
        return await createPost.save();
    }

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }

    async findOne(id: string): Promise<Post> {
        return await this.postModel.findOne({ _id: id }).exec();
    }

    async update(id: string, input: PostInput): Promise<Post> {
        return await this.postModel.findOneAndUpdate(id, input, { new: true }).exec();
    }

    async delete(id: string): Promise<Post> {
        return await this.postModel.findOneAndDelete(id).exec();
    }
}