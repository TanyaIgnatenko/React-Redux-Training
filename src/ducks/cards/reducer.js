import {ADD_CARD, EDIT_CARD, FETCH_CARDS_SUCCESS, REMOVE_CARD} from './actionTypes';

const cards = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                action.card
            ];
        case EDIT_CARD:
            return state.map(card => {
                return card.id === action.id ? card : action.card;
            });
        case REMOVE_CARD:
            return state.filter(card => card.id !== action.id);
        case FETCH_CARDS_SUCCESS:
            return cardsData;
    }
};

const cardsData = [
    {
        title: 'Tanya Ignatenko',
        description: 'JS Developer'
    },
    {
        title: 'Tanya Ignatenko 2',
        description: 'JS Developer'
    },
    {
        title: 'Tanya Ignatenko 3',
        description: 'JS Developer'
    },
    {
        title: 'Tanya Ignatenko 4',
        description: 'JS Developer'
    }
];
