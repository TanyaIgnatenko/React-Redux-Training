import {instance as API} from 'api';

const addCard = (card) => {
    const {title, content} = card;
    API.post('/posts', {title, content});
};

const editCard = (id, card) => {
    const {title, content} = card;
    API.put(`/posts/${id}`, card);
};

const removeCard = (id) => API.delete(`/posts/${id}`);

const fetchCards = () => {
    console.log('services.fetchCards: ');
    API.get('/posts');
};

const like = () => API.post('/like');

export {
    addCard,
    editCard,
    removeCard,
    fetchCards
};
