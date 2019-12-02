import { ObjectType, Field, ID, Int } from 'type-graphql'

@ObjectType()
export class UserType {
    @Field(() => ID)
    readonly id: string
    @Field()
    readonly email: string

    @Field()
    readonly name: string

    @Field()
    readonly avatar?: string
    @Field(() => Int, { nullable: true })
    readonly age?: number
    @Field(() => Int, { nullable: true })
    readonly phone?: number

    @Field()
    readonly createdAt: string
    @Field()
    readonly updatedAt: string
}