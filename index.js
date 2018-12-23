import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

mongoose.connect('mongodb://root:g123456@ds141924.mlab.com:41924/graphql-api', {useNewUrlParser:true});

const app = express();
const db = mongoose.connection;

db.on('error', () => {
    console.log('failed to connection to database');
}).once('open', () => {
    console.log('Connected to DB.'); 
}); 
    

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