import {ADD_CARD, FETCH_CARDS_SUCCESS, REMOVE_CARD} from './actionTypes';

const addCard = (card) => ({
    type: ADD_CARD,
    card
});

const removeCard = (id) => ({
    REMOVE_CARD,
    id
});

const fetchCardsSuccess = () => ({
    type: FETCH_CARDS_SUCCESS
});

export {
    addCard,
    removeCard,
    fetchCardsSuccess
};
