import {
    GraphQLList
} from 'graphql';

import { postType } from '../../types/post';
import { getModel } from '../../../models/index';
const PostModel = getModel('posts');
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