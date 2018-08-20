export default function isEqual(card1, card2) {
    if (card1.id === card2.id &&
        card1.title === card2.title &&
        card1.description === card2.description &&
        card1.isLiked === card2.isLiked) {
        return true;
    }
    return false;
}
