import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import mutations from './mutaions/index';
import queries from './queries/index';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: mutations
    })
});