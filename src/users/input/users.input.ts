import { InputType, Field, ID, Int } from 'type-graphql';

@InputType()
export class UserInput {
    @Field()
    readonly email: string

    @Field()
    readonly name: string

    @Field()
    readonly avatar?: string
    @Field(() => Int)
    
    readonly age?: number
    @Field(() => Int)
    readonly phone?: number

}