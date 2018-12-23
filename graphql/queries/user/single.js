import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { userType } from '../../types/user';
import UserModle from '../../../models/user';

export default {
    type: userType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return UserModle.findById(params.id).exec();
    }
}