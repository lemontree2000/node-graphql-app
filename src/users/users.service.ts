import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.interface";
import { UserType } from "./dto/users.dto";
import { UserInput } from "./input/users.input";


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async createUser(createUserDto: UserInput): Promise<User> {
        const createUser = new this.userModel(createUserDto);
        return await createUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async finOne(id: string): Promise<User> {
        return await this.userModel.findOne({ _id: id }).exec();
    }

    async update(id: string, input: UserInput): Promise<User> {
        return await this.userModel.findOneAndUpdate(id, input, { new: true }).exec();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findOneAndDelete(id).exec();
    }
}