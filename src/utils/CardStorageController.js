let cards = JSON.parse(localStorage.getItem('cards')) || [];
let tempCards = JSON.parse(localStorage.getItem('tempCards')) || [];
let nextCardId = getInitialNextCardId();

function fetchCards() {
    return cards;
}

function fetchCard(id) {
    return cards.find(card => card.id === id);
}

function addCard(card) {
    card.id = getNextCardId();
    cards.push(card);
    storeCards(cards);
}

function replaceCard(id, card) {
    const cardIdx = getCardIdx(id);
    if (cardIdx === -1) {
        addCard(card);
    } else {
        cards.splice(cardIdx, 1, card);
        storeCards(cards);
    }
}

function removeCard(id) {
    const cardIdx = getCardIdx(id);
    if (cardIdx === -1) {
        return;
    }

    cards.splice(cardIdx, 1);
    storeCards(cards);
}

function fetchTempCard(id) {
    return tempCards.find(card => card.id === id);
}

function addTempCard(card) {
    tempCards.push(card);
    storeTempCards(tempCards);
}

function deleteTempCard(id) {
    const cardIdx = getTempCardIdx(id);
    if (cardIdx === -1) {
        return;
    }

    tempCards.splice(cardIdx, 1);
    storeTempCards(tempCards);
}

function deleteTempCards() {
    tempCards.length = 0;
    storeTempCards(tempCards);
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

function getTempCardIdx(id) {
    return tempCards.findIndex(card => card.id === id);
}

function storeTempCards(cards) {
    localStorage.setItem('tempCards', JSON.stringify(tempCards));
}

export default {
    fetchCards,
    fetchCard,
    addCard,
    replaceCard,
    removeCard,
    fetchTempCard,
    addTempCard,
    deleteTempCard,
    deleteTempCards
};
