import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world, this is graphql api');
});

// GraphQL API 
app.use('/graphql', graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})));

app.listen(3000, () => {
    console.log('Graphql API Running');
});