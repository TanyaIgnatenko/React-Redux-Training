let nextCardId = getInitialNextCardId();

export function fetchCards() {
    return JSON.parse(localStorage.getItem('cards'));
}

export function fetchCard(id) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards.find(card => card.id === id);
}

export function addCard(card) {
    let cards;
    try {
        cards = JSON.parse(localStorage.getItem('cards'));
    } catch (e) {
        cards = [];
    }

    card.id = nextCardId;
    ++nextCardId;
    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
}

export function replaceCard(id, card) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const cardIdx = this.getCardIdx(id);
    cards.splice(cardIdx, 1, card);

    localStorage.setItem('cards', JSON.stringify(cards));
}

export function removeCard(id) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const cardIdx = this.getCardIdx(id);
    cards.splice(cardIdx, 1);

    localStorage.setItem('cards', JSON.stringify(cards));
}

function getCardIdx(id) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards.find(card => card.id === id);
}

function getLastCardId() {
    let cards;
    try {
        cards = JSON.parse(localStorage.getItem('cards'));
    } catch {
        cards = [];
    }
    const lastCardIdx = cards.length - 1;
    return cards[lastCardIdx].id;
}

function getInitialNextCardId() {
    const lastCardId = getLastCardId();
    return lastCardId !== undefined ? lastCardId + 1 : 0;
}

