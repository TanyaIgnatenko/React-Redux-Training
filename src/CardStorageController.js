let nextCardId = getInitialNextCardId();

export function fetchCards() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    return cards;
}

export function fetchCard(id) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    return cards.find(card => card.id === id);
}

export function addCard(card) {
    let cards;
    cards = JSON.parse(localStorage.getItem('cards')) || [];
    card.id = nextCardId;
    ++nextCardId;
    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
}

export function replaceCard(id, card) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardIdx = getCardIdx(id);
    cards.splice(cardIdx, 1, card);

    localStorage.setItem('cards', JSON.stringify(cards));
}

export function removeCard(id) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardIdx = getCardIdx(id);
    cards.splice(cardIdx, 1);

    localStorage.setItem('cards', JSON.stringify(cards));
}

function getCardIdx(id) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    return cards.findIndex(card => card.id === id);
}

function getLastCardId() {
    let cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? -1 : cards[cards.length -1].id;
}

function getInitialNextCardId() {
    const lastCardId = getLastCardId();
    return lastCardId !== undefined ? lastCardId + 1 : 0;
}

