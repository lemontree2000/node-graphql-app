import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { postType } from '../../types/post';
import PostModle from '../../../models/post';


export default {
    type: postType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return PostModle.findById(params.id).exec();
    }
}