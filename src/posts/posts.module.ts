import { Module } from "@nestjs/common";
import { PostsResolver } from './posts.resolvers';
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "./posts.schema";
import { PostsService } from "./posts.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Post', schema: PostSchema }
        ])
    ],
    providers: [PostsResolver, PostsService],
})

export class PostModule { }