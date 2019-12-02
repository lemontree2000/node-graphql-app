import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserScchema } from "./users.schema";
import { UserService } from "./users.service";
import { UsersResolver } from "./users.resolvers";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'User', schema: UserScchema }
        ])
    ],
    providers: [UsersResolver, UserService]
})
export class UserModule { }
