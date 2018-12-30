export const useSchema = [{
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, { collation: 'user', timestamps: true }];

export default useSchema;
