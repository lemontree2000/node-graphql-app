import {
    GraphQLList
} from 'graphql';

import { postType } from '../../types/post';
import PostModel from '../../../models/post';

export default {
    type: new GraphQLList(postType),
    resolve() {
        const posts = PostModel.find().exec();
        if (!posts) {
            throw new Error('Erro while fetching user...')
        }
        return posts;
    }
}