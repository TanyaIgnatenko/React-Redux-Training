export default function isEqual(post1, post2) {
    if (post1.id === post2.id &&
        post1.title === post2.title &&
        post1.content === post2.content &&
        post1.likeCount === post2.likeCount) {
        return true;
    }
    return false;
}
