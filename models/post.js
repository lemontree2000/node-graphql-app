
const postSchema = [{
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
}];

export default postSchema;