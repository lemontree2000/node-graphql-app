import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  readonly uid: string
  @Field()
  readonly title: string
  @Field({ nullable: true })
  readonly body?: string
}