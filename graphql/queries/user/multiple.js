import {
    GraphQLList,
} from 'graphql';
import { userType } from '../../types/user';
import { getModel } from '../../../models/index';
const UserModel = getModel('users');

export default {
    type: new GraphQLList(userType),
    resolve() {
        const users = UserModel.find().exec();
        if (!users) {
            throw new Error('Erro while fetching user...')
        }
        return users;
    }
};