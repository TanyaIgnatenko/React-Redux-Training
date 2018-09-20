import {ADD_CARD, EDIT_CARD, FETCH_CARDS, REMOVE_CARD} from './actionTypes';

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
                cards: state.cards.map(card => card.id === action.id ? card : action.card)
            };
        case REMOVE_CARD.SUCCESS:
            return {
                ...state,
                cards: state.filter(card => card.id !== action.id)
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
        default:
            return state;
    }
};

const cardsData = [
    {
        id: 1,
        title: 'Tanya Ignatenko',
        content: 'JS Developer',
        totalLikes: 5
    },
    {
        id: 2,
        title: 'Tanya Ignatenko 2',
        content: 'JS Developer',
        totalLikes: 3
    },
    {
        id: 3,
        title: 'Tanya Ignatenko 3',
        content: 'JS Developer',
        totalLikes: 1
    },
    {
        id: 4,
        title: 'Tanya Ignatenko 4',
        content: 'JS Developer',
        totalLikes: 0
    }
];
