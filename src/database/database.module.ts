import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGODB } from "src/app.config";

@Module({
    imports: [
        MongooseModule.forRoot(
            MONGODB.uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    ]
})
export class DatabaseModule { }
