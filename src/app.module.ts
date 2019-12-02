import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './posts/posts.module';
import { UserModule } from './users/users.module';

@Module({
    imports: [
        DatabaseModule,
        PostModule,
        UserModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            autoSchemaFile: 'src/schema.gql'
        })
    ],
})
export class AppModule { }