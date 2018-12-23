import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const postSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
});

export default mongoose.model('post', postSchema);