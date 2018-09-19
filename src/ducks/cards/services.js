import API from 'api';

const addCard = (card) => API.post('/post', card);

const editCard = (id, card) => API.put(`/post/${id}`, card);

const removeCard = (id) => API.delete(`/post/${id}`);

const fetchCards = () => API.get('/posts');

export {
    addCard,
    editCard,
    removeCard,
    fetchCards
};
