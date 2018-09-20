import {ADD_CARD, EDIT_CARD, FETCH_CARDS, REMOVE_CARD, TOGGLE_LIKE} from './actionTypes';

const initialState = {
    isFetching: false,
    cards: [],
    error: null
};

export const cards = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD.SUCCESS:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.card
                ]
            };
        case EDIT_CARD.SUCCESS:
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.id ? action.card : card)
            };
        case REMOVE_CARD.SUCCESS:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.id)
            };
        case FETCH_CARDS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CARDS.SUCCESS:
            return {
                isFetching: false,
                cards: action.cards
            };
        case FETCH_CARDS.ERROR:
            return {
                isFetching: false,
                cards: [],
                error: action.error
            };
        case ADD_CARD.ERROR:
            return {
                ...state,
                error: action.error
            };
        case EDIT_CARD.ERROR:
            return {
                ...state,
                error: action.error
            };
        case REMOVE_CARD.ERROR:
            return {
                ...state,
                error: action.error
            };
        case TOGGLE_LIKE.SUCCESS:
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.card.id ? action.card : card)
            };
        case TOGGLE_LIKE.ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
