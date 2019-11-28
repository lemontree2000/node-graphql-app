import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './posts/posts.module';

@Module({
    imports: [
        DatabaseModule,
        PostModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            autoSchemaFile: 'src/schema.gql'
        })
    ],
})
export class AppModule { }