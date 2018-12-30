import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { postType } from '../../types/post';
import { getModel } from '../../../models/index';
const PostModel = getModel('posts');

export default {
    type: postType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return PostModel.findById(params.id).exec();
    }
}