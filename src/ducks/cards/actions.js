import {ADD_CARD, EDIT_CARD, FETCH_CARDS_SUCCESS, REMOVE_CARD} from './actionTypes';

const addCard = (card) => ({
    type: ADD_CARD,
    card
});

const editCard = (id, card) => ({
    type: EDIT_CARD,
    id,
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
    editCard,
    removeCard,
    fetchCardsSuccess
};
