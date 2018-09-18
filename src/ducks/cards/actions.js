import {
    ADD_CARD, DELETE_TEMP_CARDS, EDIT_CARD, FETCH_CARD_SUCCESS, FETCH_CARDS_SUCCESS, FETCH_TEMP_CARD_SUCCESS,
    REMOVE_CARD
} from './actionTypes';

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

const fetchCardSuccess = (id) => ({
    type: FETCH_CARD_SUCCESS,
    card
});

const fetchTempCardSuccess = () => ({
    type: FETCH_TEMP_CARD_SUCCESS
});

const deleteTempCards = () => ({
    type: DELETE_TEMP_CARDS
});

export {
    addCard,
    editCard,
    removeCard,
    fetchCardSuccess,
    fetchTempCardSuccess,
    deleteTempCards,
    fetchCardsSuccess
};
