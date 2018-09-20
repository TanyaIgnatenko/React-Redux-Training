export default function isEqual(card1, card2) {
    if (card1.id === card2.id &&
        card1.title === card2.title &&
        card1.content === card2.content &&
        card1.totalLikes === card2.totalLikes) {
        return true;
    }
    return false;
}
