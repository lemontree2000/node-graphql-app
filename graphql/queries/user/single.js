import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { userType } from '../../types/user';
import { getModel } from '../../../models/index';
const UserModel = getModel('users');

export default {
    type: userType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return UserModel.findById(params.id).exec();
    }
}