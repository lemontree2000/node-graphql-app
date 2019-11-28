import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:g123456@ds141924.mlab.com:41924/graphql-api')
    ]
})

export class DatabaseModule { }
