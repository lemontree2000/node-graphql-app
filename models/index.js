import mongoose from 'mongoose';

// models 
import postSchema from './post';
import useSchema from './user';

const DB_URL = 'mongodb://root:g123456@ds141924.mlab.com:41924/graphql-api';

mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
    console.log('failed to connection to database');
}).once('open', () => {
    console.log('Connected to DB.');
});

const models = {
    posts: postSchema,
    users: useSchema
};
for (const n in models) {
    const m = models[n];
    mongoose.model(n, new mongoose.Schema(...m));
}
export function getModel(name) {
    return mongoose.model(name);
};