import API from 'api';

const addCard = (card) => API.post('/posts', card);

const editCard = (id, card) => API.put(`/posts/${id}`, card);

const removeCard = (id) => API.delete(`/posts/${id}`);

const fetchCards = () => API.get('/posts');

export {
    addCard,
    editCard,
    removeCard,
    fetchCards
};
