import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { userInputType, userType } from '../../types/user';
import { getModel } from '../../../models/index';
const UserModel = getModel('users');

export default {
    type: userType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLID
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },
    resolve(root, params) {
        return UserModel.findByIdAndUpdate(
            params.id,
            {
                $set: { ...params.data }
            },
            { new: true }
        )
        .catch(err => new Error('could\'t Update User data', err));
    }
};