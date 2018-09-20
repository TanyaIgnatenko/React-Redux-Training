import {instance as API} from 'api';

const addCard = (card) => {
    const {title, content} = card;
    return API.post('/posts', {title, content});
};

const editCard = (id, card) => {
    const {title, content} = card;
    return API.put(`/posts/${id}`, card);
};

const removeCard = (id) => API.delete(`/posts/${id}`);

const fetchCards = () => API.get('/posts');

const toggleLike = (id) => API.post(`/posts/${id}/like`);

export {
    addCard,
    editCard,
    removeCard,
    fetchCards,
    toggleLike
};
