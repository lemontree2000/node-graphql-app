import userQuery from './user';
import PostQuery from './post';

export default {
    ...userQuery,
    ...PostQuery
};