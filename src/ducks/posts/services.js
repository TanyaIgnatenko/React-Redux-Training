import {instance as API} from 'api';

const addPost = post => {
    const {title, content} = post;
    return API.post('/posts', {title, content});
};

const editPost = (id, post) => {
    const {title, content} = post;
    return API.put(`/posts/${id}`, post);
};

const deletePost = id => API.delete(`/posts/${id}`);

const fetchPosts = () => API.get('/posts');

const toggleLike = id => API.post(`/posts/${id}/like`);

export {
    addPost,
    editPost,
    deletePost,
    fetchPosts,
    toggleLike
};
