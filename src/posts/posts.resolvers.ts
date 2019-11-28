import { PostsService } from "./posts.service";
import { PostType } from "./dto/posts.dto";
import { PostInput } from "./input/post.input";
import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Post } from "./posts.interface";

@Resolver()
export class PostsResolver {
    constructor(private readonly postsService: PostsService) { }
  
    @Query(() => [PostType], {name: 'posts'})
    async posts() {
      return this.postsService.findAll();
    }
    @Query(() => PostType, {name: 'post'})
    async post(@Args('input') id: string) {
      return this.postsService.findOne(id);
    }
  
    @Mutation(() => PostType,{name: 'createPost'})
    async createPost(@Args('input') input: PostInput) {
      return this.postsService.create(input);
    }

    @Mutation(() => PostType, {name: 'deletePost'})
    async deletePost(@Args('input') id:string) {
        return this.postsService.delete(id);
    }

    @Mutation(() => PostType, {name: 'updatePost'})
    async updatePost(@Args('id') id: string, @Args('input') input: PostInput) {
     return this.postsService.update(id, input);
    }
}