let cards = JSON.parse(localStorage.getItem('cards')) || [];
let nextCardId = getInitialNextCardId();

export function fetchCards() {
    return cards;
}

export function fetchCard(id) {
    return cards.find(card => card.id === id);
}

export function addCard(card) {
    card.id = getNextCardId();
    cards.push(card);
    storeCards(cards);
}

export function replaceCard(id, card) {
    const cardIdx = getCardIdx(id);
    if (cardIdx === -1) {
        addCard(card);
    } else {
        cards.splice(cardIdx, 1, card);
        storeCards(cards);
    }
}

export function removeCard(id) {
    const cardIdx = getCardIdx(id);
    if (cardIdx === -1) {
        return;
    }

    cards.splice(cardIdx, 1);
    storeCards(cards);
}

export function saveTempCard(card) {
    const temporalCards = JSON.parse(localStorage.getItem('temporalCards'));
    lastVersionCard = temporalCards.find(elem => elem.id === card.id);
}

export function getTempCard(id) {

}

export function deleteTempCard(card) {

}

function getCardIdx(id) {
    return cards.findIndex(card => card.id === id);
}

function getLastCardId() {
    return cards.length === 0 ? -1 : cards[cards.length - 1].id;
}

function getInitialNextCardId() {
    const lastCardId = getLastCardId();
    return lastCardId === -1 ? 0 : lastCardId + 1;
}

function getNextCardId() {
    return nextCardId++;
}

function storeCards(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
}

