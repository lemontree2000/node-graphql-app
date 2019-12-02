import { UserService } from "./users.service";
import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { UserType } from "./dto/users.dto";
import { UserInput } from "./input/users.input";


@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [UserType], { name: 'users' })
    async users() {
        return this.userService.findAll();
    }

    @Query(() => UserType, { name: 'user' })
    async user(@Args('input') id: string) {
        return this.userService.finOne(id);
    }

    @Mutation(() => UserType, { name: 'createUser' })
    async createPost(@Args('input') input: UserInput) {
      return this.userService.createUser(input);
    }
  
    @Mutation(() => UserType, { name: 'deleteUser' })
    async deletePost(@Args('input') id: string) {
      return this.userService.delete(id);
    }
  
    @Mutation(() => UserType, { name: 'updateUser' })
    async updatePost(@Args('id') id: string, @Args('input') input: UserInput) {
      return this.userService.update(id, input);
    }
}