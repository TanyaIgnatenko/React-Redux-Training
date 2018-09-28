import {instance as API} from 'api';
import {SERVER_END_POINT} from '../../config';

const addPost = post => {
    const {title, content} = post;
    return API.post(SERVER_END_POINT.ADD_POST, {title, content});
};

const editPost = (id, post) => {
    const {title, content} = post;
    return API.put(SERVER_END_POINT.EDIT_POST.replace(':id', id), {title, content});
};

const deletePost = id => API.delete(SERVER_END_POINT.DELETE_POST.replace(':id', id));

const fetchPosts = ({page, perPage = 15}) => API.get(
    (SERVER_END_POINT.FETCH_POSTS).replace(':perPage', perPage).replace(':page', page)
);

const fetchPost = id => API.get(SERVER_END_POINT.FETCH_POST.replace(':id', id));

const toggleLike = id => API.post(SERVER_END_POINT.TOGGLE_LIKE.replace(':id', id));

export {
    addPost,
    editPost,
    deletePost,
    fetchPosts,
    fetchPost,
    toggleLike
};
