import {ADD_CARD, EDIT_CARD, REMOVE_CARD, FETCH_CARDS} from './actionTypes';

const addCardRequest = (card) => ({
    type: ADD_CARD.REQUEST,
    card
});

const addCardSuccess = (card) => ({
    type: ADD_CARD.SUCCESS,
    card
});

const addCardError = (error) => ({
    type: ADD_CARD.REQUEST,
    error
});

const editCardRequest = (id, card) => ({
    type: EDIT_CARD.REQUEST,
    id,
    card
});

const editCardSuccess = (id, card) => ({
    type: EDIT_CARD.SUCCESS,
    id,
    card
});

const editCardError = (error) => ({
    type: EDIT_CARD.ERROR,
    error
});

const removeCardRequest = (id) => ({
    type: REMOVE_CARD.REQUEST,
    id
});

const removeCardSuccess = (id) => ({
    type: REMOVE_CARD.SUCCESS,
    id
});

const removeCardError = (error) => ({
    type: REMOVE_CARD.ERROR,
    error
});

const fetchCardsRequest = () => ({
    type: FETCH_CARDS.REQUEST
});

const fetchCardsSuccess = (cards) => ({
    type: FETCH_CARDS.SUCCESS,
    cards
});

const fetchCardsError = (error) => ({
    type: FETCH_CARDS.ERROR,
    error
});

export * from './actions';

