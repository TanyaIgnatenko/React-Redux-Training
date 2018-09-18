import {ADD_CARD, EDIT_CARD, FETCH_CARDS_SUCCESS, REMOVE_CARD} from './actionTypes';

export const cards = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            let card = action.card;
            const lastCardId = state[state.length - 1].id;
            card.id = lastCardId + 1;
            cardsData.push(card);
            return [
                ...state,
                card
            ];
        case EDIT_CARD:
            return state.map(card => {
                return card.id === action.id ? card : action.card;
            });
        case REMOVE_CARD:
            return state.filter(card => card.id !== action.id);
        case FETCH_CARDS_SUCCESS:
            return cardsData;
        default:
            return state;
    }
};

const cardsData = [
    {
        id: 1,
        title: 'Tanya Ignatenko',
        description: 'JS Developer',
        likeCount: 5
    },
    {
        id: 2,
        title: 'Tanya Ignatenko 2',
        description: 'JS Developer',
        likeCount: 3
    },
    {
        id: 3,
        title: 'Tanya Ignatenko 3',
        description: 'JS Developer',
        likeCount: 1
    },
    {
        id: 4,
        title: 'Tanya Ignatenko 4',
        description: 'JS Developer',
        likeCount: 0
    }
];
