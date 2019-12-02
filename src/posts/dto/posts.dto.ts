import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class PostType {
    @Field(() => ID)
    readonly id: string
    @Field()
    readonly uid: string
    @Field()
    readonly title: string
    @Field()
    readonly createdAt: string
    @Field()
    readonly updatedAt: string
    @Field({ nullable: true })
    readonly body?: string
}